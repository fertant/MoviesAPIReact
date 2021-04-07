import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import { IMovie } from '../MovieCard/IMovie';
import { Button, BlackButtonWithBorder } from '../../atoms/Button/Button';
import {
  FormFooter,
  FieldWrapper,
  FieldLabel,
  FieldText,
  FormTitle,
  FormElement,
  StyledSelect,
  FieldError,
} from './Form';
import { IMovieProps, ISelectValue, IMovieValues } from './IForm';
import { actionUpdateMovie, actionControlVisibility } from '../../../actions/Actions';

const EditMovieForm: FunctionComponent<IMovieProps> = () => {
  const movie: IMovie = useSelector(({ selectedMovie: { selectedMovie: movie } }) => movie);
  const dispatch = useDispatch();

  const schema = yup.object({
    title: yup
      .string()
      .required('Title is required'),
    releaseDate: yup
      .date()
      .required('Release date is required'),
    movieUrl: yup
      .string()
      .url('Image should have valid url')
      .required('Image is required'),
    genre: yup
      .array()
      .min(1, 'Genre should be at least one')
      .required('Genre is required'),
    overview: yup
      .string()
      .required('Description is required'),
    runtime: yup
      .number()
      .min(30, 'Every movie should be at least 30 min long')
      .required('Runtime is required'),
  });

  const formik = useFormik({
    initialValues: {
      movieId: movie.id,
      title: movie.title,
      releaseDate: movie.yearOfRelease,
      movieUrl: movie.img,
      genre: movie.genre.map((item) => ({ value: item, label: item })),
      overview: movie.subtitle,
      runtime: movie.duration !== null ?? movie.duration.toString(),
    },
    validationSchema: schema,
    onSubmit: (value: IMovieValues) => {
      const updatedMovie: IMovie = {
        id: Number(value.movieId),
        title: value.title,
        subtitle: movie.subtitle,
        description: value.overview,
        rate: movie.rate,
        duration: Number(value.runtime),
        img: value.movieUrl,
        yearOfRelease: value.releaseDate,
        genre: value.genre.map((item) => (item.value)),
      };
      dispatch(actionUpdateMovie(updatedMovie));
      dispatch(actionControlVisibility('edit', false));
    },
  });

  return (
    <FormElement onSubmit={formik.handleSubmit}>
      <FormTitle>EDIT MOVIE</FormTitle>
      <FieldWrapper>
        <FieldLabel htmlFor="movieId">Movie id</FieldLabel>
        <FieldText
          name="movieId"
          type="text"
          placeholder="MO32820TH"
          onChange={formik.handleChange}
          value={formik.values.movieId}
          readOnly
        />
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <FieldText
          name="title"
          type="text"
          placeholder="Moana"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        { formik.errors.title && formik.touched.title ? (
          <FieldError>{formik.errors.title}</FieldError>
        ) : null }
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="releaseDate">Release date</FieldLabel>
        <FieldText
          name="releaseDate"
          type="text"
          placeholder="2018-03-31"
          onChange={formik.handleChange}
          value={formik.values.releaseDate}
        />
        { formik.errors.releaseDate && formik.touched.releaseDate ? (
          <FieldError>{formik.errors.releaseDate}</FieldError>
        ) : null }
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="movieUrl">Movie url</FieldLabel>
        <FieldText
          name="movieUrl"
          type="text"
          placeholder="www.moana.com"
          onChange={formik.handleChange}
          value={formik.values.movieUrl}
        />
        { formik.errors.movieUrl && formik.touched.movieUrl ? (
          <FieldError>{formik.errors.movieUrl}</FieldError>
        ) : null }
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="genre">Genre</FieldLabel>
        <StyledSelect
          id="genre"
          name="genre"
          isMulti
          options={[
            { value: 'documentary', label: 'Documentary' },
            { value: 'comedy', label: 'Comedy' },
            { value: 'horror', label: 'Horror' },
            { value: 'crime', label: 'Crime' },
            { value: 'action', label: 'Action & Adventure' },
          ]}
          defaultValue={formik.values.genre}
          onChange={(option: ISelectValue) => formik.setFieldValue('genre', option)}
        />
        { formik.errors.genre && formik.touched.genre ? (
          <FieldError>{formik.errors.genre}</FieldError>
        ) : null }
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="overview">Overview</FieldLabel>
        <FieldText
          name="overview"
          type="text"
          placeholder="Overview text"
          onChange={formik.handleChange}
          value={formik.values.overview}
        />
        { formik.errors.overview && formik.touched.overview ? (
          <FieldError>{formik.errors.overview}</FieldError>
        ) : null }
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="runtime">Runtime</FieldLabel>
        <FieldText
          name="runtime"
          type="text"
          placeholder="Runtime text"
          onChange={formik.handleChange}
          value={formik.values.runtime}
        />
        { formik.errors.runtime && formik.touched.runtime ? (
          <FieldError>{formik.errors.runtime}</FieldError>
        ) : null }
      </FieldWrapper>
      <FormFooter>
        <BlackButtonWithBorder onClick={() => dispatch(actionControlVisibility('edit', false))}>RESET</BlackButtonWithBorder>
        <Button type="submit">SUBMIT</Button>
      </FormFooter>
    </FormElement>
  );
};

export default EditMovieForm;

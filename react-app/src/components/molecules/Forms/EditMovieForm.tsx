import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

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
import { schema, Genre } from './FormValidationSchema';

const EditMovieForm: FunctionComponent<IMovieProps> = () => {
  const movie: IMovie = useSelector(({ selectedMovie: { selectedMovie: movie } }) => movie);
  const dispatch = useDispatch();
  const options = Object
    .entries(Genre)
    .map((entry: Array<String>) => ({
      label: entry[1],
      value: entry[0],
    }));

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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
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
          options={options}
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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
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

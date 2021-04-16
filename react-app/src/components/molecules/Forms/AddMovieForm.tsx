import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

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
import { ISelectValue, IMovieValues, IAddMovieProps } from './IForm';
import { actionControlVisibility } from '../../../actions/Actions';
import { schema, Genre } from './FormValidationSchema';

const AddMovieForm: FunctionComponent<IAddMovieProps> = ({ addMovieHandler }) => {
  const dispatch = useDispatch();
  const options = Object
    .entries(Genre)
    .map((entry: Array<String>) => ({
      label: entry[1],
      value: entry[0],
    }));
  const formik = useFormik({
    initialValues: {
      title: '',
      releaseDate: '',
      movieUrl: '',
      genre: [],
      overview: '',
      runtime: '',
    },
    validationSchema: schema,
    onSubmit: (value: IMovieValues) => {
      const updatedMovie: IMovie = {
        id: Number(value.movieId),
        title: value.title,
        subtitle: value.title,
        description: value.overview,
        rate: 0,
        duration: Number(value.runtime),
        img: value.movieUrl,
        yearOfRelease: value.releaseDate,
        genre: value.genre ? value.genre.map((item) => (item.value)) : [],
      };
      addMovieHandler(updatedMovie);
    },
  });

  return (
    <FormElement onSubmit={formik.handleSubmit}>
      <FormTitle>ADD MOVIE</FormTitle>
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
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="movieUrl">Movie url</FieldLabel>
        <FieldText
          name="movieUrl"
          type="text"
          placeholder="http://www.google.com"
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
          placeholder="60"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.runtime}
        />
        { formik.errors.runtime && formik.touched.runtime ? (
          <FieldError>{formik.errors.runtime}</FieldError>
        ) : null }
      </FieldWrapper>
      <FormFooter>
        <BlackButtonWithBorder onClick={() => dispatch(actionControlVisibility('add', false))}>RESET</BlackButtonWithBorder>
        <Button type="submit">SUBMIT</Button>
      </FormFooter>
    </FormElement>
  );
};

export default AddMovieForm;

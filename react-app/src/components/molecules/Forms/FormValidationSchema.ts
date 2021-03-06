import * as yup from 'yup';

export const Genre: Object = {
  documentary: 'Documentary',
  comedy: 'Comedy',
  horror: 'Horror',
  crime: 'Crime',
  action: 'Action & Adventure',
};

export const schema = yup.object({
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
  overview: yup
    .string()
    .required('Description is required'),
  runtime: yup
    .number()
    .min(30, 'Every movie should be at least 30 min long')
    .required('Runtime is required'),
});

export default schema;

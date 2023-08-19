import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number: yup.number().integer().required(),
  seats: yup.number().integer().required(),
  restaurant_id: yup.string().nullable(),
});

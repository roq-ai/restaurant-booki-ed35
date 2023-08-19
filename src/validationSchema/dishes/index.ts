import * as yup from 'yup';

export const dishValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  menu_id: yup.string().nullable(),
});

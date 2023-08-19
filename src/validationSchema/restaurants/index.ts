import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  name_update: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

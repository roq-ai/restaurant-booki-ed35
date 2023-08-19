import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  number_of_seats: yup.number().integer().required(),
  reservation_date: yup.date().required(),
  guest_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});

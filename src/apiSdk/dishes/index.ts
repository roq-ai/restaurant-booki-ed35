import axios from 'axios';
import queryString from 'query-string';
import { DishInterface, DishGetQueryInterface } from 'interfaces/dish';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDishes = async (query?: DishGetQueryInterface): Promise<PaginatedInterface<DishInterface>> => {
  const response = await axios.get('/api/dishes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDish = async (dish: DishInterface) => {
  const response = await axios.post('/api/dishes', dish);
  return response.data;
};

export const updateDishById = async (id: string, dish: DishInterface) => {
  const response = await axios.put(`/api/dishes/${id}`, dish);
  return response.data;
};

export const getDishById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dishes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDishById = async (id: string) => {
  const response = await axios.delete(`/api/dishes/${id}`);
  return response.data;
};

import * as types from "../constants/actionTypes";

export const addCity = (data) => ({
  type: types.ADD_CITY,
  payload: data,
});

export const addUser = (data) => ({
  type: types.ADD_USER,
  payload: data,
});
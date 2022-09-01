import { dogBreedReducer } from '../reducers/DogBreedReducer';
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({ reducer : dogBreedReducer });
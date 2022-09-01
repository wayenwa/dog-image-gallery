import { combineReducers } from 'redux'
import dogBreeds from './DogBreedReducer'
import dogColumns from './DogColumnsReducer'

export default combineReducers({
    dogBreeds,
    dogColumns
})
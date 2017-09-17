import { combineReducers } from 'redux'
import favorites from './favorites'

const addFavorite = combineReducers({
    favorites
})

export default addFavorite
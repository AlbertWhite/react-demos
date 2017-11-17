import { combineReducers } from 'redux'

import itemErrorReducer from './itemErrorReducer'
import itemLoadingReducer from './itemLoadingReducer'
import itemReducer from './itemReducer'

//each reducer only store on kind of data
const reducer = combineReducers({
	itemErrorReducer,
	itemLoadingReducer,
	itemReducer
})

export default reducer
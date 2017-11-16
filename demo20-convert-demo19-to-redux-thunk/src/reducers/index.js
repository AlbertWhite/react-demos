import { combineReducers } from 'redux'

import itemErrorReducer from './itemErrorReducer'
import itemLoadingReducer from './itemLoadingReducer'
import itemReducer from './itemReducer'

const reducer = combineReducers({
	itemErrorReducer,
	itemLoadingReducer,
	itemReducer
})

export default reducer
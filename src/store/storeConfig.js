import {  combineReducers} from 'redux'
import { reducer as toastrReducer, toastr } from 'react-redux-toastr'

import userReducer from './reducers/userReducer'

const reducers = combineReducers({
    user: userReducer,
    toastr: toastrReducer
})

export default reducers
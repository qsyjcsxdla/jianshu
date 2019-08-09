// npm install --save redux-immutable 
import { combineReducers} from 'redux-immutable'
//import { combineReducers} from 'redux'
//import headerReducer from '../common/header/store/reducer'
// { XX as XXX }表示将XX别名为XXX，es6语法；
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'


const reducer =  combineReducers({ //combineReducers()如果从redux-immutable出，产生的数据也是immutable的
    header: headerReducer,
    home  : homeReducer,
    detail: detailReducer,
    login : loginReducer
})

export default reducer;
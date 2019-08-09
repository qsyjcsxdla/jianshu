//npm install immutable;
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({  //fromJS方法表示将里面的对象改为不可更改(immutable)对象
    login: false

});



export default (state = defaultState, action) =>{
    switch(action.type){
        case constants.CHANGE_LOGIN: 
        return state.set('login', action.value);
        case constants.LOGOUT: 
        return state.set('login', action.value);
        default: 
        return state;
    }
}
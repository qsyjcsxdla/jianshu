import * as constants from './constants'
//npm install immutable;
import { fromJS } from 'immutable'

const defaultState = fromJS({  //fromJS方法表示将里面的对象改为不可更改(immutable)对象
    focused  : false,
    mouseIn  : false,
    list     : [],
    page     : 1,
    totalPage: 1
})

export default (state = defaultState, action) =>{
    switch(action.type){
        case constants.SEARCH_FOCUS: 
        return state.set('focused', true);
        case constants.SEARCH_BIUR: 
        return state.set('focused', false);
        case constants.CHANGE_LIST: 
        //return state.set('list', action.data).set('totalPage',action.totalPage);
        return state.merge({//merge接收一个对象，方法等同于getIn，整个句子等同于上一句
            list     : action.data,
            totalPage: action.totalPage
        });
        case constants.MOUSE_ENTER: 
        return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE: 
        return state.set('mouseIn', false);
        case constants.CHANGE_PAGE: 
        return state.set('page', action.page);
        default: 
        return state;
    }
    // if(action.type === constants.SEARCH_FOCUS){
    //     //immutable对象的set方法，会结合之前immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused', true) 
    //     // {
    //     //     focused: true
    //     // }
    // }
    // if(action.type === constants.SEARCH_BIUR){
    //     return state.set('focused', false)
    //     // {
    //     //     focused: false
    //     // }
    // }
    // if(action.type === constants.CHANGE_LIST){
    //     return state.set('list', action.data)
    //     //return state.set('focused', false)
    //     // {
    //     //     focused: false
    //     // }
    // }
    // return state;
}
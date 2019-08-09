
//npm install immutable;
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({  //fromJS方法表示将里面的对象改为不可更改(immutable)对象
    topicList    : [],
    articleList  : [],
    recommendList: [],
    articlePage  : 1,
    showScroll   : false
})

const changeHomeData  = (state,action) => {
    return state.merge({
        topicList    : fromJS(action.topicList),
        articleList  : fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    }); 
}

const addArticleList = (state,action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    }); 
}

export default (state = defaultState, action) =>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA: 
        // return state.merge({
        //     topicList    : fromJS(action.topicList),
        //     articleList  : fromJS(action.articleList),
        //     recommendList: fromJS(action.recommendList),
        // }); 
        return changeHomeData(state,action)
        case constants.ADD_HOME_LIST: 
        // return state.merge({
        //     articleList: state.get('articleList').concat(action.list),
        //     articlePage: action.nextPage
        // }); 
        //return state.set('articleList', state.get('articleList').concat(action.list));  
        return addArticleList(state,action)
        case constants.TOGGLE_SCROLL_TOP: 
        return state.set('showScroll', action.show)
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
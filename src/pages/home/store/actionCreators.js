import axios from 'axios'
import * as constants from './constants'
import { fromJS} from 'immutable'

const changeHomeData = (result) => ({
    type         : constants.CHANGE_HOME_DATA,
    topicList    : result.topicList,
    articleList  : result.articleList,
    recommendList: result.recommendList,
});
const addHomeList = (list, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            const result = res.data.data;
            //const action = changeHomeData(result)
            dispatch(changeHomeData(result));
            // this.props.changeHomeData(action)
            //console.log(result)
        })
        .catch((error) =>{
            console.log('error')
        })
         //dispatch(action);
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page)
        .then((res) => {
            const result = res.data.data;
            //const action = changeHomeData(result)
            dispatch(addHomeList(result, page + 1));
            // this.props.changeHomeData(action)
            //console.log(result)
        })
        .catch((error) =>{
            console.log('error')
        })
         //dispatch(action);
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
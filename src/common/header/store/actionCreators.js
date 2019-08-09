import * as constants from './constants'
import { fromJS } from 'immutable'
// npm install axios
import axios from 'axios'

const changeList = (data) => ({  // 该方法为getList调用，没必要暴露出去
    type     : constants.CHANGE_LIST,
    data     : fromJS(data),                        //为了将普通的数组类型转换为immutable类型
    totalPage: fromJS(Math.ceil(data.length / 10))
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BIUR
});
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then((res)=>{
            const data = res.data;
            //const action=changeList(data.data);
            dispatch(changeList(data.data)) 
        })
        .catch((err)=>{
            console.log('error');
        })
    }
}
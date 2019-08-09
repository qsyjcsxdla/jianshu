import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './compoments/Topic'
import Recommend from './compoments/Recommend'
import List from './compoments/List'
import Writer from './compoments/Writer'
import { actionCreators } from './store'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'


class Home extends PureComponent { //PureComponent 要与immutable框架一同使用

    handleScrollTop() {
        window.scrollTo(0,0);
    }

    render() {
         return (
             <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4581/313b30a87782c9934e69fa46cfd7df0549e55aea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={ this.handleScrollTop }>顶部</BackTop> : null}
                
             </HomeWrapper>
         )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
        // axios.get('/api/home.json')
        // .then((res) => {
        //     const result = res.data.data;
        //     const action = {
        //         type         : 'change_home_data',
        //         topicList    : result.topicList,
        //         articleList  : result.articleList,
        //         recommendList: result.recommendList,
        //     }
        //     this.props.changeHomeData(action)
        //     //console.log(result)
        // })
        // .catch((error) =>{
        //     console.log('error')
        // })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents () {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home);
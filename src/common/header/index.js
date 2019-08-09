 import React, { Component }  from 'react'
 //import React from 'react'
import { connect } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import  { actionCreators }  from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper
 } from './style'
 import { Link } from 'react-router-dom'

//  容器组件特征：
// 负责管理数据和业务逻辑，不负责 UI 的呈现
// 带有内部状态
// 使用 Redux 的 API

// 展示组件特征：
// 只负责 UI 的呈现，不带有任何业务逻辑
// 所有数据都由参数（this.props）提供
// 不使用任何 Redux 的 API


// const Header = (props) => {
//     return(
//         <HeaderWrapper>
//             <Logo></Logo>
//             <Nav>
//                 <NavItem className='left active'>首页</NavItem>
//                 <NavItem className='left'>下载APP</NavItem>
//                 <NavItem className='right'>登录</NavItem>
//                 <NavItem className='right'>
//                     <i className="iconfont">&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition 
//                         in         = { props.focused }
//                         timeout    = {200}
//                         classNames = "slide"
//                     >
//                         <NavSearch
//                             className = { props.focused ? 'focused' : ' '}
//                             onFocus   = { props.handleInputFocus }
//                             onBlur    = { props.handleInputBlur }
//                         ></NavSearch>
//                     </CSSTransition>
//                     <i className = {props.focused ? 'focused iconfont' : ' iconfont'}>&#xe600;</i>
//                     { getListArea(props.focused) }
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='writting'>
//                     <i className="iconfont">&#xe616;</i>
//                     写文章
//                 </Button>
//                 <Button className='reg'>注册</Button>
//             </Addition>
//         </HeaderWrapper> 
//     )  
// }

// const getListArea = (show) =>{
//     if(show){
//         return(
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>换一批</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     }else{
//         return null;
//     }
// }

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     focused: false
    //     // };
    //     this. handleInputFocus     = this. handleInputFocus.bind(this);
    //           this.handleInputBlur = this.handleInputBlur.bind(this)
    // }
    render () {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo></Logo>
                </Link>
            
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                {
                    login ? 
                    <NavItem onClick={ logout } className='right'>退出</NavItem>: 
                    <Link to="/login"><NavItem className='right'>登陆</NavItem></Link>
                }
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        in         = { focused }
                        timeout    = {200}
                        classNames = "slide"
                    >
                        <NavSearch
                            className = {focused ? 'focused' : ' '}
                            onFocus   = {() => handleInputFocus(list)}
                            onBlur    = {handleInputBlur}
                        />
                    </CSSTransition>
                    <i className = { focused ? 'focused iconfont zoom' : ' iconfont zoom'}>&#xe600;</i>
                    { this.getListArea() }
                </SearchWrapper>
            </Nav>
            <Addition>
            <Link to="/write">
                <Button className='writting'>
                    <i className="iconfont">&#xe616;</i>
                    写文章
                </Button>
            </Link>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
        )
    }
    getListArea(){
        const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList                                                                                           = list.toJS();  //toJS方法为把immutable类型转为js普通类型；
        const pageList                                                                                          = [];
        
        if(newList.length){
            for( let i = (page -1) * 10; i < page * 10; i++){
                //console.log(newList[i])
                pageList.push(
                    <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
                )
            }
        }
        
        if(focused || mouseIn){
            return(
                <SearchInfo 
                    onMouseEnter = { handleMouseEnter }
                    onMouseLeave = { handleMouseLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick = { () => handleChangePage(page,totalPage,this.spinIcon) }
                        >
                        <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i> 
                        {/* ref可以获取react的真实DOM节点 */}
                        换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                        {/* {
                            list.map((item)=>{ // this.props.list为immutable类型,map()也是immutable的
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }   */}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

//     // handleInputFocus (){
//     //     this.setState({
//     //        focused: true
//     //     })
//     // }

//     // handleInputBlur() {
//     //     this.setState({
//     //         focused: false
//     //      }) 
//     // }
 }

// state 是个js对象
// state.header 是个immutable对象
const mapStateToProps = (state) => {
    return { //state.focused  为仓库里的focused
        //focused: state.focused
        //focused: state.header.focused  //在reduce.js里这个数据多了层header，所以这里也要加个header层级
        //focused: state.get('header').get('focused')  //get()方法对应reducerjs里的set()方法;
        focused  : state.getIn(['header','focused']),     //等价于上一种写法
        list     : state.getIn(['header','list']),
        page     : state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn  : state.getIn(['header','mouseIn']),
        login    : state.getIn(['login','login'])
    }
}
const mapDispatchToProps= (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list)
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            
            // const action = {
            //     type: 'search_focus'
            // }
            // const action = actionCreators.searchFocus()
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            // const action = {
            //     type: 'search_blur'
            // }
            //const action = actionCreators.searchBlur()
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle)
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle+360) +'deg)'
            //console.log(page,totalPage)
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            //dispatch(actionCreators.changePage())
        },
        logout() {
            dispatch(loginActionCreators.logout()) //这个数据是根据login下的数据来的
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//connect参数1将 store 中的数据作为 props 绑定到组件上
//connect参数2将 action 作为 props 绑定到组件上。
import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
//
import { withRouter } from 'react-router-dom'
import {
    DeatilWrapper,
    Header,
    Content
} from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
    render() {
        //console.log(this.props.match.params.id) // 动态获取路由
        //console.log(this.props.location.search) //用这个方法需要自己解析路由取值
         return (
            <DeatilWrapper>
                <Header>{this.props.title}</Header>
                {/* dangerouslySetInnerHTML 属性不让标签转义 */}
                <Content dangerouslySetInnerHTML ={{__html:this.props.content}}></Content>
            </DeatilWrapper>
            
         )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

}

const mapState = (state) => ({
    title  : state.getIn(['detail','title']),
    content: state.getIn(['detail','content']),
});

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch (actionCreators.getDetail(id))
    }
});

//withRouter  用能力获取detail组件中的所有数据内容
export default connect(mapState,mapDispatch)(withRouter(Detail));
import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus)
        if(loginStatus){
            return (
                <div>写文章页面</div>
            )
        }else{
            // 重定向
            return <Redirect to="./login"></Redirect>
        }
        
    }  
}

const mapState = (state) =>({
    loginStatus: state.getIn(['login','login'])
})


export default connect(mapState,null)(Write);
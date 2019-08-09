import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
         return (
             <div>
                 <TopicWrapper>
                     {
                         list.map( (item) => (
                            <TopicItem key={item.get('id')}>
                                <img 
                                    className = "topic-pic"
                                    src       = {item.get('imgUrl')}
                                    alt       = ""
                                /> 
                                {item.get('title')}
                            </TopicItem>
                            )
                         )
                     }
                     {/* <TopicItem>
                         <img className="topic-pic" src="//upload-images.jianshu.io/upload_images/11747602-f3abd1057764c1ef?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
                         社会热点
                     </TopicItem> */}
                 </TopicWrapper>
             </div>
         )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);
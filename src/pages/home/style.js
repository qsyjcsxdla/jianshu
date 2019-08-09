import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width    : 960px;
    margin   : 0 auto;
    overflowu: hidden;
`;
export const HomeLeft = styled.div`
    width      : 625px
    margin-left: 15px;
    padding-top: 30px;
    float      : left;
    .banner-img{
        width : 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow     : hidden;
    padding      : 20px 0 10px 0;
    margin-left  : -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float        : left;
    margin-left  : 18px;
    margin-bottom: 18px;
    background   : #f7f7f7;
    height       : 30px;
    line-height  : 30px;
    padding-right: 10px;
    font-size    : 14px;
    color        : #333;
    border       : 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        margin-right: 10px;
        width       : 32px;
        height      : 32px;
        display     : black;
        float       : left;
    }
`;
export const ListItem = styled.div`
    overflow     : hidden
    padding      : 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        width        : 125px;
        height       : 100px;
        display      : block;
        float        : right;
        border-radius: 10px;
    }

`;
export const ListInfo = styled.div`
    width: 490px;
    float: left;
    .title{
        line-height: 27px;
        font-size  : 18px;
        font-weight: bold;
        color      : #333;
    }
    .desc{
        line-height: 24px;
        font-size  : 14px;
        color      : #999;

    }
`;
export const LoadMore = styled.div`
    width        : 100%;
    height       : 40px;
    line-height  : 40px;
    background   : #a5a5a5;
    margin       : 30px 0;
    text-align   : center;
    border-radius: 20px;
    color        : #fff;
    cursor       : pointer;
`;
export const RecommendWrapper = styled.div`
    width : 280px;
    margin: 30px 0;
`;
export const RecommendItem =styled.div`
    width          : 280px;
    height         : 50px;
    background     : url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom  : 10px;
`;
export const WriterWrapper = styled.div`
    text-align   : center;
    width        : 278px;
    border       : 1px solid #dcdcdc;
    height       : 300px;
    line-height  : 300px;
    border-radius: 3px;
`;
export const BackTop =styled.div`
    position   : fixed;
    right      : 10px;
    bottom     : 100px;
    width      : 60px;
    height     : 60px;
    line-height: 60px;
    text-align : center;
    font-size  : 14px;
    cursor     : pointer;
    border     : 1px solid #ccc;
`;

import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as constants from './constants'

//作为一个header/store/下的出口文件,方便其他文件引用该目录下文件，减少层级关系
export { reducer, actionCreators, constants }
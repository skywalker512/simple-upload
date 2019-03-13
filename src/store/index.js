import { createStore, compose } from "redux"
import reducer from './reducer';

// 使用浏览器插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers())

import { createStore, compose, applyMiddleware } from "redux"
import reducer from './reducer';
import createSagaMiddleware  from 'redux-saga'

import mySaga from './saga'
const sagaMiddleware = createSagaMiddleware()

// 使用浏览器插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(mySaga)
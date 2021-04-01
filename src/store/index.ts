import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas/saga';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(thunk));

// sagaMiddleWare.run(helloSaga);

import ReactDOM from 'react-dom';
import './styles/index.module.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store/index';

import CircularLoader from './components/circular-loader/index';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<CircularLoader />} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

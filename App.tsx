import React from 'react';
import AppNavigation from './navigation/appNavigation'
import { Provider } from 'react-redux'
import { store } from './store'
// import { Container } from './styles';

const DeliveryApp: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  )
}

export default DeliveryApp;
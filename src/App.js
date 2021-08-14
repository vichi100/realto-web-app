import logo from './logo.svg';
import './App.css';
import React from "react"
import { StyleSheet, Text, View } from "react-native";
import { useRoutes, A } from 'hookrouter';
import routes from './routes';

import { Provider } from "react-redux";
import configureStore from "./Store";

const store = configureStore();

const App = (props) => {
  const routeResult = useRoutes(routes);
  return (

    <Provider store={store}>
      {routeResult}
    </Provider>
  )


};

export default App;



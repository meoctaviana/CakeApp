/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Font, AppLoading } from "expo";
import Router from './src/Router/Router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
    };
  }

  

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    console.disableYellowBox = true;
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
        <Router />
    );
  }
};
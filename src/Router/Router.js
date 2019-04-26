import React from 'react';

import Home from '../Context/Home';
import AddMenu from '../Context/AddMenu';

import Following from '../Context/Following';
import Coba1 from '../Context/Coba1';
import Coba2 from "../Context/Coba2";
import SideBar from './Sidebar';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const MainRoute = createDrawerNavigator(
  {
    Home: { screen: Home },
    Coba1: { screen: Coba1 },
    Coba2: { screen: Coba2 },
    Following : {screen: Following},
    AddMenu : {screen : AddMenu}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

//export default 
//const ani = createAppContainer(MainRoute)
const AppContainer = createAppContainer(MainRoute);
export default class MainRootC extends React.Component {
  render() {
    return (
      <AppContainer
      // Pass these navigation props to child navigation
      // So that it's possible to navigate back to home
      // screenProps={this.props.navigation}

      />
    );
  }
}

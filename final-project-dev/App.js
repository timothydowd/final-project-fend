import React from 'react';
import HomeScreen from './screens/HomeScreen'// should set the proper path.
import MainScreen from './screens/MainScreen'
import SingleView from './screens/SingleView'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Main: { screen: MainScreen },
  Single: { screen: SingleView }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


const App = createAppContainer(MainNavigator);

export default App;

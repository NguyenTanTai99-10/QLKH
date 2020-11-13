import React from 'react';

import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs';

// import Login from '../components/login/Login';
import LoginContainer from '../../src/containers/Login/LoginContainer';
import HomeKh from '../components/Screen/HomeKH';
import Course from '../components/Screen/Course';
import Add from '../components/Screen/Add';
import flastlist from '../components/Screen/flastlist';
import Box from '../components/Screen/Box';
import Course1 from '../components/Screen/Course1';

import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../components/home/Home';
import Home2 from '../components/home/Home';
import flastlist1 from '../components/Screen/flastlist1'; 
import CourseContainer from '../../src/containers/Course/CourseContainer';
import AddCourseContainer from '../../src/containers/Course/AddCourseConatainer'; 

const TabNavigator = createBottomTabNavigator({
  Home: Home,
});

// const TAB = createAppContainer(TabNavigator);

const RootStack = createStackNavigator(
  {
    // Init: {
    //   screen: WelcomeScreen,
    // },

    // MyModal: {
    //   screen: Home, //screen : TAB
    // },
    // LoginContainer: {
    //   screen: LoginContainer,
    // },


    // HomeKh: {
    //   screen: HomeKh,
    // },
    CourseContainer: {
      screen: CourseContainer,
    },

    // Course: {
    //   screen: Course,
    // },
    // flastlist :{
    //   screen : flastlist,
    // },
    AddCourseContainer: {
      screen: AddCourseContainer,
    },
    Box: {
      screen: Box,
    },
    Course1: {
      screen: Course1,
    },
    flastlist1: {
      screen: flastlist1,
    },
  },

  {
    mode: 'modal',
    headerMode: 'none',
    // defaultNavigationOptions: {
    //   headerRight: () => {
    //     <Text>+</Text>;
    //   },
    // },
  },
);

export default createAppContainer(RootStack);

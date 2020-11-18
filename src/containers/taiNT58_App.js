import React from 'react';

import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs';

// import Login from '../components/login/Login';
import LoginContainer from './Login/taiNT58_LoginContainer';
import HomeKh from '../components/Course/taiNT58_HomeKH';

import Course1 from '../components/ItemsComponent/taiNT58_Course1';



import Home from '../components/home/Home';

import CourseContainer from './Course/taiNT58_CourseContainer';
import AddCourseContainer from './Course/taiNT58_AddCourseConatainer'; 

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

    // // Course: {
    // //   screen: Course,
    // // },
    // // flastlist :{
    // //   screen : flastlist,
    // // },
    AddCourseContainer: {
      screen: AddCourseContainer,
    },
    
    Course1: {
      screen: Course1,
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

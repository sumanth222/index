import React, { Component } from "react";
//import react in our code.

//Import react-navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./firstScreen";
import Registration from "./SecondPage";
import studentDash from "./dashboards/Student";
import teacherDash from "./dashboards/Teacher";
import SplashScreen from "./screens/splashScreen";

//import all the screens we are going to switch
const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    SplashScreen: { screen: SplashScreen },
    Login: { screen: Login },
    Registration: { screen: Registration },
    student: { screen: studentDash },
    teacher: { screen: teacherDash },
    //First entry by default be our first screen if we do not define initialRouteName
  },
  { headerMode: "none" },
  {
    initialRouteName: "SplashScreen",
  }
);
export default createAppContainer(App);

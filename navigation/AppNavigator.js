// navigation/AppNavigator.js
import React from "react"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import DiscoverScreen from "../screens/DiscoverScreen"
import ProfileScreen from "../screens/ProfileScreen"
import { Ionicons } from "@expo/vector-icons"

const TabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="compass-outline" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="person-circle-outline" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  }
)

export default createAppContainer(TabNavigator)

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigation } from "./HomeStackNavigation";
import { LibraryStackNavigation } from "./LibraryStackNavigation";
import { SearchStackNavigation } from "./SearchStackNavigation";

import CustomTabBar from "../components/CustomTabBar";
import { ProfileStackNavigation } from "./ProfileTabNavigation";

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{
        headerShown: false,
        focusedIcon: "home",
        unfocusedIcon: "home-outline",
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackNavigation}
      options={{
        headerShown: false,
        focusedIcon: "search-circle-sharp",
        unfocusedIcon: "search-outline",
      }}
    />
    <Tab.Screen
      name="Your library"
      component={LibraryStackNavigation}
      options={{
        headerShown: false,
        focusedIcon: "play-circle",
        unfocusedIcon: "play-circle-outline",
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackNavigation}
      options={{
        headerShown: false,
        focusedIcon: "person",
        unfocusedIcon: "person-outline",
      }}
    />
  </Tab.Navigator>
);

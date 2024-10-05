import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YourLibraryScreen from "../screens/YourLibraryScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SubscriptionScreen from "../screens/ProfileScreen/SubscriptionScreen";

const ProfileStack = createNativeStackNavigator();
export const ProfileStackNavigation = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <ProfileStack.Screen
      name="SubscriptionScreen"
      component={SubscriptionScreen}
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
);

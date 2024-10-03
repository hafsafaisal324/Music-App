import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import { BottomTabNavigation } from "./BottomTabNavigation";
import SignInScreen from "../screens/LoginScreen/Signin";
import VerifyEmailScreen from "../screens/LoginScreen/VerifyEmailScreen";
import OnboardingScreen from "../screens/Onboarding/Onboarding";
import Questions from "../screens/Onboarding/Questions";

const LoginStack = createNativeStackNavigator();
export const LoginStackNavigation = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="VerifyEmail"
      component={VerifyEmailScreen}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="HomeStack"
      component={BottomTabNavigation}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="Questions"
      component={Questions}
      options={{ headerShown: false }}
    />
  </LoginStack.Navigator>
);

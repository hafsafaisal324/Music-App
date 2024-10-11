import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { StyleProps } from "react-native-reanimated";

import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

import { widthPercentageToDP } from "../../utils/responsiveWidth";

interface ScrollViewWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  automaticallyAdjustKeyboardInsets?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  props?: any;
  enableResetScrollToCoords?: boolean;
  isKeyboardAwareFlatList?: boolean;
}

const ScrollViewWrapper: React.FC<ScrollViewWrapperProps> = ({
  children,
  style,
  automaticallyAdjustKeyboardInsets = true,
  enableResetScrollToCoords = false,
  contentStyle,
  isKeyboardAwareFlatList = true,
  ...props
}) => {
  let defaultTextStyles: StyleProps = {
    // ...newTheme.layout.pageWrapper(colors),
    // backgroundColor: colors.surface["surface-black"],
  };

  if (!isKeyboardAwareFlatList) {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // You can adjust this offset as per your UI needs
      >
        <View
          style={[defaultTextStyles, style, { flexGrow: 1, paddingBottom: 40 }]}
        >
          children
        </View>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAwareFlatList
      enableResetScrollToCoords={enableResetScrollToCoords}
      data={[1]}
      keyboardShouldPersistTaps={Platform.OS === "ios" ? "always" : "handled"}
      enableOnAndroid
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      keyboardDismissMode="none"
      extraHeight={widthPercentageToDP(30)}
      enableAutomaticScroll={true}
      extraScrollHeight={40}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[contentStyle, { flexGrow: 1 }]}
      style={[defaultTextStyles, style]}
      automaticallyAdjustKeyboardInsets={automaticallyAdjustKeyboardInsets}
      {...props}
      renderItem={() => <>{children}</>}
    />
  );
};

export default ScrollViewWrapper;

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

import { exploreStrings, libraryStrings } from "../../utils/strings";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../utils/colors";
import styles from "./styles";

const CustomTabBar = ({ state, descriptors, navigation }) => (
  <View
    // locations={[0.75, 0]}
    style={styles.bottomTabGradient}
  >
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const { focusedIcon, unfocusedIcon } = descriptors[route.key].options;

      return (
        <TouchableOpacity
          key={route.key}
          style={styles.touchableIcon}
          onPress={() => navigation.navigate(route.name)}
        >
          {route.name === exploreStrings.explore ? (
            <>
              {isFocused && (
                <MaterialCommunityIcons
                  name={unfocusedIcon}
                  size={13}
                  style={styles.circleIcon}
                />
              )}
              <Ionicons
                name={focusedIcon}
                size={24}
                color={colors.spotifyBlack}
              />
            </>
          ) : (
            <Ionicons
              name={isFocused ? focusedIcon : unfocusedIcon}
              size={24}
              color={colors.spotifyBlack}
            />
          )}
          <Text style={styles.labelText}>{route.name}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default CustomTabBar;

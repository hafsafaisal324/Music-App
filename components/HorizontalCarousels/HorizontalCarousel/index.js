import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ConditionalImage from "../../ConditionalImage";

import { handleNavigation } from "../../../utils/helpers";
import styles from "./styles";

const HorizontalCarousel = ({
  items,
  title,
  buttonText = "",
  onPress = null,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.carouseView}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {items && <Text style={styles.titleText}>{title}</Text>}
        {buttonText != "" && (
          <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageView}
            onPress={() => handleNavigation(item, navigation)}
          >
            <ConditionalImage
              image={item.images[0]?.url}
              size={40}
              style={styles.image}
              right={true}
            />
            <Text style={styles.descriptionText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HorizontalCarousel;

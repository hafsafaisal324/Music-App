import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import BottomPadding from "../../components/BottomPadding";
import { useAlbum } from "../../hooks/useAlbum";
import CategoryCard from "../../components/Cards/CategoryCard";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../utils/colors";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

export default function AllCategoriesScreen({ navigation }) {
  const { featuredAlbums } = useAlbum().featured();
  const route = useRoute();
  const catText = route?.params?.category === 0 ? "Categories" : "Playlists";
  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={22} color={colors.spotifyWhite} />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>All {catText}</Text>

        <CategoryCard items={featuredAlbums} />
        <BottomPadding />
      </ScrollView>
    </View>
  );
}

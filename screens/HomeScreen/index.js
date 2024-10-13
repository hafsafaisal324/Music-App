import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { carouselStrings } from "../../utils/strings";
import { usePlaylist } from "../../hooks/usePlaylist";
import { useAlbum } from "../../hooks/useAlbum";
import { useRecentlyPlayed } from "../../hooks/useRecentlyPlayed";
import { useMessage } from "../../hooks/useMessage";

import BottomPadding from "../../components/BottomPadding";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import HomeGrid from "../../components/Grids/HomeGrid";
import HorizontalCarousel from "../../components/HorizontalCarousels/HorizontalCarousel";

import styles from "./styles";
import useTheme from "../../hooks/useTheme";
import style from "./styles";
import { useSearchText } from "../../hooks/useSearchText";
import SearchBar from "../../components/SearchBar";
import CategorySelector from "../../components/CategorySelector";
import { libraryStrings, categorySelectorStrings } from "../../utils/strings";
import PlaylistScreen from "../PlaylistScreen";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { message } = useMessage();
  const { featuredPlaylists } = usePlaylist().featured();
  const { recentlyPlayed } = useRecentlyPlayed();
  const { featuredAlbums } = useAlbum().featured();
  const { searchText, setSearchText } = useSearchText("");
  const [category, setCategory] = useState(null);
  const { colors } = useTheme();
  const styles = style(colors);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={message} icon={"notifications-outline"} />

      <SearchBar valueText={searchText} changeText={setSearchText} />
      <CategorySelector
        categories={categorySelectorStrings}
        selected={category}
        setSelected={setCategory}
      />

      <HomeGrid items={recentlyPlayed} />
      <View style={styles.carouselView}>
        <HorizontalCarousel
          items={featuredPlaylists}
          title={carouselStrings.featuredPlaylists}
        />
        <HorizontalCarousel
          onPress={() => navigation.navigate("AllCategories")}
          buttonText="See All"
          items={featuredAlbums}
          title={carouselStrings.featuredAlbums}
        />
        <HorizontalCarousel
          buttonText="Explore All"
          items={featuredAlbums}
          title={carouselStrings.myPlaylists}
        />
      </View>
      <BottomPadding />
    </ScrollView>
  );
};

export default HomeScreen;

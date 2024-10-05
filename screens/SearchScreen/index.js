import React, { useState } from "react";
import { ScrollView, Text } from "react-native";

import styles from "./styles";
import { categorySelectorStrings, exploreStrings } from "../../utils/strings";

import BottomPadding from "../../components/BottomPadding";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import ExploreGrid from "../../components/Grids/ExploreGrid";
import SearchBar from "../../components/SearchBar";
import CategorySelector from "../../components/CategorySelector";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState(null);
  const [category, setCategory] = useState(null);
  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={exploreStrings.explore} icon={"camera-outline"} />

      <SearchBar valueText={searchText} changeText={setSearchText} />
      <CategorySelector
        categories={categorySelectorStrings}
        selected={category}
        setSelected={setCategory}
      />
      <Text style={styles.titleText}>{"Trending Collections"}</Text>
      <ExploreGrid />
      <BottomPadding />
    </ScrollView>
  );
};

export default SearchScreen;

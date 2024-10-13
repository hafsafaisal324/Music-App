import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import { categorySelectorStrings, exploreStrings } from "../../utils/strings";

import BottomPadding from "../../components/BottomPadding";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import ExploreGrid from "../../components/Grids/ExploreGrid";
import SearchBar from "../../components/SearchBar";
import CategorySelector from "../../components/CategorySelector";
import Icon from "react-native-vector-icons/Ionicons";
const SearchScreen = () => {
  const [searchText, setSearchText] = useState(null);
  const [category, setCategory] = useState(null);
  const collections = [
    {
      title: "Relaxation & Stress Relief",
      duration: "27 Minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Deep Sleep Meditation",
      duration: "34 Minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mindful Breathing Exercise",
      duration: "17 Minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Stress-Free Guided Visualization",
      duration: "44 Minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Present Moment Awareness",
      duration: "27 Minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rain Forest Relaxation",
      duration: "27 Minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const playlists = [
    {
      title: "Body Scan Meditation",
      sessions: 150,
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Breathing Exercises",
      sessions: 25,
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Affirmations & Visualizations",
      sessions: 35,
      imageUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <ScrollView style={styles.background}>
      <ScreenHeader title={exploreStrings.explore} icon={"camera-outline"} />

      <SearchBar valueText={searchText} changeText={setSearchText} />
      <CategorySelector
        categories={categorySelectorStrings}
        selected={category}
        setSelected={setCategory}
      />
      {/* <Text style={styles.titleText}>{"Trending Collections"}</Text> */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Collections</Text>
        <Text style={styles.sectionLink}>See All</Text>
      </View>
      <View style={styles.collectionContainer}>
        {collections.map((item, index) => (
          <TouchableOpacity key={index} style={styles.collectionCard}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.collectionImage}
            />
            <View style={styles.collectionTextContainer}>
              <Text style={styles.collectionTitle}>{item.title}</Text>
              <Text style={styles.collectionDuration}>
                Duration: {item.duration}
              </Text>
            </View>
            <Icon
              name="arrow-forward-circle-outline"
              size={20}
              color="#fff"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Playlists</Text>
        <Text style={styles.sectionLink}>View Playlist</Text>
      </View>
      {playlists.map((item, index) => (
        <TouchableOpacity key={index} style={styles.playlistCard}>
          <Image source={{ uri: item.imageUrl }} style={styles.playlistImage} />
          <View style={styles.playlistTextContainer}>
            <Text style={styles.playlistTitle}>{item.title}</Text>
            <Text style={styles.playlistSessions}>
              Sessions: {item.sessions}
            </Text>
          </View>
          <Icon
            name="arrow-forward-circle-outline"
            size={20}
            color="#666"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      ))}
      {/* <ExploreGrid /> */}
      <BottomPadding />
    </ScrollView>
  );
};

export default SearchScreen;

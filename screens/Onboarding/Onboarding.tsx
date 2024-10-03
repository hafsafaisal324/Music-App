import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function OnboardingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You’re Almost There!</Text>
      <Text style={styles.subtitle}>
        Just a Few More Steps to Peaceful Bliss
      </Text>

      {/* Placeholder for the illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/onboarding.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Questions")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E0F0FF", // Light blue background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#1E1E1E",
    textAlign: "center",
    marginBottom: 30,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#007BFF", // Blue color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

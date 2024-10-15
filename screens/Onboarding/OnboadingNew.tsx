import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";

// Get the device width
const { width, height } = Dimensions.get("window");
export default function CustomOnboarding({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);

  // Animation value for swipe effect
  const position = useRef(new Animated.Value(0)).current;

  const onboardingData = [
    {
      id: 1,
      title: "Welcome to Soul Tribe Network",
      description: "Your personal sanctuary for meditation and mindfulness.",
      image: require("../../assets/images/step1.png"),
    },
    {
      id: 2,
      title: "Curated Meditations for Every Mood",
      description:
        "Tailored meditations for relaxation, focus, or better sleep.",
      image: require("../../assets/images/step2.png"), // Replace with your image
    },
    {
      id: 3,
      title: "Create Your Personal Playlists",
      description:
        "Build personalized playlists and meditate anytime, anywhere.",
      image: require("../../assets/images/step3.png"), // Replace with your image
    },
  ];

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        position.setValue(gestureState.dx); // Update position based on horizontal swipe
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 50) {
          goToPreviousStep();
        } else if (gestureState.dx < -50) {
          goToNextStep();
        }
        Animated.spring(position, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const goToNextStep = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.replace("Login"); // Navigate to home screen or main app
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(onboardingData.length - 1);
  };

  const translateX = position.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [-width, 0, width],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.slideContainer, { transform: [{ translateX }] }]}
      >
        <Image
          source={onboardingData[currentStep].image}
          style={[styles.image]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{onboardingData[currentStep].title}</Text>
          <Text style={styles.description}>
            {onboardingData[currentStep].description}
          </Text>
        </View>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.nextButton,
            currentStep === onboardingData.length - 1 && styles.finishButton,
          ]}
          onPress={goToNextStep}
        >
          <Text style={styles.nextText}>
            {currentStep === onboardingData.length - 1 ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height / 2, // Adjust as necessary
    resizeMode: "cover",
  },
  textContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 40,
  },
  skipButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  finishButton: {
    backgroundColor: "#28a745", // Green for the "Finish" button
  },
  skipText: {
    fontSize: 16,
    color: "#007BFF",
  },
  nextText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

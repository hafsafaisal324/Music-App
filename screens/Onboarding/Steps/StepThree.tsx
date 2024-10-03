import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StepThree({
  formData,
  handleNext,
  handleBack,
  updateFormData,
}) {
  const [meditationLevel, setMeditationLevel] = useState(
    formData.meditationLevel
  );

  const handleNextStep = () => {
    updateFormData({ meditationLevel });
    handleNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        How Would You Describe Your Current Meditation Practice?
      </Text>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setMeditationLevel("Beginner")}
      >
        <Text style={styles.optionText}>Beginner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setMeditationLevel("Intermediate")}
      >
        <Text style={styles.optionText}>Intermediate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setMeditationLevel("Advanced")}
      >
        <Text style={styles.optionText}>Advanced</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNextStep}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  option: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  optionText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
``;

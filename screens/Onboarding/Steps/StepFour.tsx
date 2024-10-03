import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function StepFour({
  formData,
  updateFormData,
  handleBack,
  handleNext,
}) {
  const meditationOptions = [
    "Guided Meditation",
    "Music & Sounds",
    "Breathing Exercises",
    "Affirmations & Visualizations",
    "Body Scan Meditation",
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    formData.meditationTypes || []
  );

  const toggleOption = (option) => {
    let updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(option)) {
      updatedOptions = updatedOptions.filter((opt) => opt !== option);
    } else {
      updatedOptions.push(option);
    }
    setSelectedOptions(updatedOptions);
    updateFormData({ meditationTypes: updatedOptions });
  };

  const isOptionSelected = (option) => selectedOptions.includes(option);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        What type of meditation do you prefer?
      </Text>

      <View style={styles.optionContainer}>
        {meditationOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              isOptionSelected(option) ? styles.selectedOption : {},
            ]}
            onPress={() => toggleOption(option)}
          >
            <Text
              style={
                isOptionSelected(option)
                  ? styles.selectedOptionText
                  : styles.optionText
              }
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedOptions.length > 0
            ? styles.activeNextButton
            : styles.disabledNextButton,
        ]}
        onPress={handleNext}
        disabled={selectedOptions.length === 0}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleOption("Support all meditations")}>
        <Text style={styles.supportAll}>Support all meditations</Text>
      </TouchableOpacity>

      <Button title="Back" onPress={handleBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  option: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 5,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  selectedOptionText: {
    color: "#fff",
  },
  nextButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  activeNextButton: {
    backgroundColor: "#007BFF",
  },
  disabledNextButton: {
    backgroundColor: "#d3d3d3",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  supportAll: {
    color: "#007BFF",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

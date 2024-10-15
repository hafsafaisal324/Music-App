import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

export default function StepFive({
  formData,
  handleBack,
  handleNext,
  updateFormData,
}) {
  // Define radio buttons options using useMemo for optimization
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "5-10 minutes",
        value: "5-10 minutes",
      },
      {
        id: "2",
        label: "10-20 minutes",
        value: "10-20 minutes",
      },
      {
        id: "3",
        label: "20-30 minutes",
        value: "20-30 minutes",
      },
      {
        id: "4",
        label: "30+ minutes",
        value: "30+ minutes",
      },
    ],
    []
  );

  // State to track selected radio button ID
  const [selectedId, setSelectedId] = useState(formData.timeSelection || "");

  // Handle radio button selection
  const handleOptionSelect = (id) => {
    setSelectedId(id); // Update selected ID
    const selectedButton = radioButtons.find((button) => button.id === id);
    if (selectedButton) {
      updateFormData({ timeSelection: selectedButton.value }); // Update form data
    }
  };

  const isNextDisabled = !selectedId; // Determine if the Next button should be disabled

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Meditation Time</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={handleOptionSelect} // Call the selection handler
        selectedId={selectedId} // Bind selected ID to RadioGroup
        layout="column" // Arrange radio buttons in a column
        containerStyle={styles.radioGroupContainer} // Add container style here
      />
      <View style={styles.buttonContainerNew}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isNextDisabled
                ? styles.disabledNextButton
                : styles.activeNextButton,
            ]} // Conditional styling
            onPress={handleNext}
            disabled={isNextDisabled} // Disable if no option is selected
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainerNew: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignSelf: "center",
  },
  radioGroupContainer: {
    // Added styles to align the RadioGroup
    flexDirection: "column", // Arrange children in a column
    alignItems: "flex-start", // Align radio buttons to the left
    justifyContent: "flex-start", // Align radio buttons at the start
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  activeNextButton: {
    backgroundColor: "#007BFF", // Active button color
  },
  disabledNextButton: {
    backgroundColor: "#d3d3d3", // Disabled button color
  },
  buttonText: {
    color: "white", // Set text color to white
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

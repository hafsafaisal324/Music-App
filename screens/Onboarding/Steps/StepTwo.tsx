import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function StepTwo({
  formData,
  handleNext,
  handleBack,
  updateFormData,
}) {
  const [country, setCountry] = useState(formData.country);

  const handleNextStep = () => {
    updateFormData({ country });
    handleNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        In Which Country Are You Currently Living?
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Country name"
        value={country}
        onChangeText={setCountry}
      />
      <View style={styles.buttonContainerNew}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNextStep}>
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
    // justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonContainerNew: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
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

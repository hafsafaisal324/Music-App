import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StepFive from "./Steps/StepFifth";
import { useNavigation } from "@react-navigation/native";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Update to 5 steps since StepFive is added
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    meditationLevel: "",
    meditationTypes: [],
    timeSelection: "", // Add this to store the time selection from StepFive
  });

  const handleNext = () => {
    if (currentStep === 5) {
      navigation.navigate("HomeStack");
    } else {
      setCurrentStep((prevStep) =>
        prevStep < totalSteps ? prevStep + 1 : prevStep
      );
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            formData={formData}
            handleNext={handleNext}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            handleNext={handleNext} // Add handleNext to allow proceeding to StepFive
            handleBack={handleBack}
            updateFormData={updateFormData}
          />
        );
      case 5: // Add StepFive case here
        return (
          <StepFive
            formData={formData}
            handleBack={handleBack}
            handleNext={handleNext} // This can trigger form submission after this step
            updateFormData={updateFormData}
          />
        );
      default:
        return <StepOne handleNext={handleNext} />;
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.stepText}>
        Step {currentStep} of {totalSteps}
      </Text>
      {renderStep()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginBottom: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  stepText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

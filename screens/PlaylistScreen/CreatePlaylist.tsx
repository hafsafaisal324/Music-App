import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

// Define some default colors
const colors = [
  "#ff6b6b",
  "#4d79ff",
  "#cc66ff",
  "#66ccff",
  "#a366ff",
  "#66ff99",
  "#99ffcc",
  "#99ccff",
];

const CreatePlaylistScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      playlistName: "",
      description: "",
      color: null,
    },
  });

  // Submit handler
  const onSubmit = (data: any) => {
    console.log("Playlist Data: ", data);
    alert(`Playlist "${data.playlistName}" created with color ${data.color}`);
  };

  // Cancel handler to reset the form
  const onCancel = () => {
    reset();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Playlist</Text>

      {/* Playlist Name Input */}
      <Text style={styles.label}>Playlist Name</Text>
      <Controller
        name="playlistName"
        control={control}
        rules={{ required: "Playlist name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              styles.input,
              errors.playlistName && { borderColor: "red" },
            ]}
            placeholder="e.g., awareness meditation"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.playlistName && (
        <Text style={styles.errorText}>{errors.playlistName.message}</Text>
      )}

      {/* Color Selection */}
      <Text style={styles.label}>Select Playlist's Color</Text>
      <Controller
        name="color"
        control={control}
        rules={{ required: "Please select a color" }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onChange(color)}
                style={[
                  styles.colorBox,
                  { backgroundColor: color },
                  value === color && styles.selectedColor,
                ]}
              />
            ))}
          </View>
        )}
      />
      {errors.color && (
        <Text style={styles.errorText}>{errors.color.message}</Text>
      )}

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="e.g., Playlist description (optional)"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        {/* Create Playlist Button */}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.createButton}
        >
          <Text style={styles.buttonText}>Create Playlist</Text>
        </TouchableOpacity>

        {/* Cancel Button */}
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4ff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 8,
    margin: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedColor: {
    borderColor: "#000",
  },
  createButton: {
    backgroundColor: "#3a5e96",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  cancelButton: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default CreatePlaylistScreen;

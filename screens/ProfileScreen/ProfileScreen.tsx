import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function ProfileScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNo: "",
      country: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle profile update logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>

        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/80" }} // Placeholder for the image
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <Text style={styles.cameraIconText}>📷</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="i.e John"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        <Text style={styles.errorText}>This field is required</Text>
      )}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="i.e John"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="lastName"
      />
      {errors.lastName && (
        <Text style={styles.errorText}>This field is required</Text>
      )}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="i.e John@email.com"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={styles.errorText}>This field is required</Text>
      )}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="i.e ******"
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>This field is required</Text>
      )}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="i.e ******"
            value={value}
            onChangeText={onChange}
            keyboardType="phone-pad"
          />
        )}
        name="phoneNo"
      />
      {errors.phoneNo && (
        <Text style={styles.errorText}>This field is required</Text>
      )}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="i.e United States"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="country"
      />
      {errors.country && (
        <Text style={styles.errorText}>This field is required</Text>
      )}

      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subscriptionsButton}
        onPress={() => navigation.navigate("SubscriptionScreen")}
      >
        <Text style={styles.subscriptionsButtonText}>My Subscriptions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 15, // Adds space between the title and the image
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cameraIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
  },
  cameraIconText: {
    fontSize: 16,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  updateButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  updateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subscriptionsButton: {
    marginTop: 10,
    alignItems: "center",
  },
  subscriptionsButtonText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 5,
  },
});

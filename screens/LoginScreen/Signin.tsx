import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigation = useNavigation();
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("VerifyEmail");
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back to Soul Tribe Network</Text>
      <Text style={styles.subtitle}>
        A true resource for relaxation therapy
      </Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Email Field */}
      <Controller
        control={control}
        // rules={{
        //   required: "Email is required",
        //   pattern: {
        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     message: "Invalid email address",
        //   },
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                errors.email && styles.inputError,
                emailFocused && styles.inputFocused,
              ]}
              placeholder="Enter your email"
              placeholderTextColor="#a3a3a3"
              onBlur={() => {
                onBlur();
                setEmailFocused(false);
              }}
              onFocus={() => setEmailFocused(true)}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>
        )}
        name="email"
        defaultValue=""
      />

      {/* Password Field */}
      <Controller
        control={control}
        // rules={{ required: "Password is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                errors.password && styles.inputError,
                passwordFocused && styles.inputFocused,
              ]}
              placeholder="Enter your password"
              placeholderTextColor="#a3a3a3"
              secureTextEntry
              onBlur={() => {
                onBlur();
                setPasswordFocused(false);
              }}
              onFocus={() => setPasswordFocused(true)}
              onChangeText={onChange}
              value={value}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>
        )}
        name="password"
        defaultValue=""
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
      </Text>

      <Text style={styles.termsText}>
        By continuing, you agree to our{" "}
        <Text style={styles.linkText}>Terms of services</Text> and{" "}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  activeTab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#0A74DA",
    borderRadius: 30,
    marginRight: 10,
  },
  inactiveTab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveTabText: {
    color: "#B8B8B8",
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  inputFocused: {
    borderColor: "#0A74DA", // Highlight border color when input is focused
  },
  inputError: {
    borderColor: "#ff4d4d",
  },
  errorText: {
    color: "#ff4d4d",
    marginTop: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#B8B8B8",
  },
  loginButton: {
    backgroundColor: "#0A74DA",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  signUpText: {
    color: "#0A74DA",
    fontWeight: "bold",
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#B8B8B8",
  },
  linkText: {
    color: "#0A74DA",
  },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Clipboard from "@react-native-clipboard/clipboard";
import { useNavigation } from "@react-navigation/native";

export default function VerifyEmailScreen() {
  const [code, setCode] = useState("");
  const [hasCopied, setHasCopied] = useState(false);
  const navigation = useNavigation();
  const handlePasteFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString();
    if (clipboardContent.length === 6) {
      setCode(clipboardContent);
      setHasCopied(true);
    }
  };

  const handleVerify = () => {
    console.log("Code entered:", code);
    navigation.navigate("HomeStack");
    // Add your verification logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your email</Text>
      <Text style={styles.subtitle}>
        We just sent a 6-digit code to andren@email.com, enter it below
      </Text>

      {/* OTP Input View */}
      <OTPInputView
        style={styles.otpInput}
        pinCount={6}
        code={code} // Code from state
        onCodeChanged={(newCode) => setCode(newCode)}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
      />

      {/* Paste from clipboard */}
      <TouchableOpacity onPress={handlePasteFromClipboard}>
        <Text style={styles.pasteText}>Paste from clipboard</Text>
      </TouchableOpacity>

      {/* Verify button */}
      <TouchableOpacity
        style={[
          styles.verifyButton,
          code.length === 6 ? styles.activeButton : styles.inactiveButton,
        ]}
        disabled={code.length !== 6}
        onPress={handleVerify}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Did not receive code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "left",
    marginBottom: 30,
  },
  otpInput: {
    width: "80%",
    height: 80,
    alignSelf: "center",
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    color: "#333",
    fontSize: 18,
  },
  underlineStyleHighLighted: {
    borderColor: "#0A74DA",
  },
  pasteText: {
    color: "#0A74DA",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
  },
  verifyButton: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  activeButton: {
    backgroundColor: "#0A74DA",
  },
  inactiveButton: {
    backgroundColor: "#B8D4F1",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendContainer: {
    marginTop: 20,
    alignSelf: "center",
  },
  resendText: {
    color: "#666",
    fontSize: 14,
  },
  resendLink: {
    color: "#0A74DA",
    fontWeight: "bold",
  },
});

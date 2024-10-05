import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SubscriptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Subscriptions</Text>
      <Text style={styles.description}>
        Your subscriptions are here. You can cancel anytime!
      </Text>

      <View style={styles.planContainer}>
        <View style={styles.planHeader}>
          <Text style={styles.planTitle}>Monthly Plan</Text>
          <TouchableOpacity style={styles.planCheckmark}>
            <Text style={styles.checkmark}>✔</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.planInfo}>7 days free</Text>
        <Text style={styles.planPrice}>$9.99/month</Text>
        <Text style={styles.planBilling}>Billed Monthly.</Text>
        <Text style={styles.cancelText}>Cancel anytime.</Text>
      </View>

      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={styles.upgradeButtonText}>Upgrade Payment Method</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  planContainer: {
    backgroundColor: "#FCD54B",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  planCheckmark: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5,
  },
  checkmark: {
    fontSize: 16,
  },
  planInfo: {
    fontSize: 14,
    marginTop: 5,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  planBilling: {
    fontSize: 14,
  },
  cancelText: {
    color: "#D9534F",
    fontSize: 14,
    marginTop: 5,
  },
  upgradeButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  upgradeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    alignItems: "center",
  },
  backButtonText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

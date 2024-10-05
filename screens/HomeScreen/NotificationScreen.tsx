import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([
    { id: "1", title: "New Awareness Session", time: "20 sec ago" },
    { id: "2", title: "New Awareness Session", time: "20 sec ago" },
    { id: "3", title: "New Awareness Session", time: "20 sec ago" },
    { id: "4", title: "New Awareness Session", time: "20 sec ago" },
  ]);

  const markAsRead = (rowKey) => {
    Alert.alert("Notification", `Marked notification ${rowKey} as read.`);
  };

  const deleteNotification = (rowKey) => {
    const newData = notifications.filter((item) => item.id !== rowKey);
    setNotifications(newData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.rowFront}>
      <View style={styles.notificationContent}>
        {/* Notification bell icon */}
        <Icon name="bell" size={24} color="#007BFF" style={styles.icon} />
        <View style={styles.textWrapper}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.rowBack}>
      {/* Mark as Read */}
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backLeftBtn]}
        onPress={() => markAsRead(item.id)}
      >
        <Icon name="check" size={24} color="#FFF" />
        <Text style={styles.backTextWhite}>Mark as Read</Text>
      </TouchableOpacity>

      {/* Delete */}
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteNotification(item.id)}
      >
        <Icon name="trash" size={24} color="#FFF" />
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <SwipeListView
        data={notifications}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75} // Swipe left for Delete
        leftOpenValue={75} // Swipe right for Mark as Read
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  markAllText: {
    fontSize: 16,
    color: "#007BFF",
  },
  rowFront: {
    backgroundColor: "#FFF",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 20,
    justifyContent: "center",
  },
  notificationContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  textWrapper: {
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationTime: {
    fontSize: 14,
    color: "#888",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#F2F5FF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  icon: {
    marginRight: 10,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backLeftBtn: {
    backgroundColor: "#007BFF",
    left: 0,
  },
  backRightBtnRight: {
    backgroundColor: "#FF3B30",
    right: 0,
  },
  backTextWhite: {
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 5,
  },
});

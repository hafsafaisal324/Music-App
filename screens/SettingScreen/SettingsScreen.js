import React, { useState } from 'react';
import { ScrollView,View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';



const SettingsScreen = (
  {navigation}
) => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [appNotifications, setAppNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const profileImage=require("../../assets/images/profile.png");


  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}> 
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <AntDesign name="left" size={17} color={colors.spotifyWhite} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
      <Image
        source={profileImage}
        style={styles.iconImage}
      />
    </TouchableOpacity>
    </View>

      
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>Push Notifications</Text>
          <Switch 
          trackColor={{false:colors.spotifyGray, true: colors.primary}}
            value={pushNotifications}
            onValueChange={(value) => setPushNotifications(value)}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>App Notifications</Text>
          <Switch
          trackColor={{false: colors.spotifyGray, true: colors.primary}}
            value={appNotifications}
            onValueChange={(value) => setAppNotifications(value)}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Email Updates</Text>

          <Switch
          trackColor={{false: colors.spotifyGray, true: colors.primary}}
            value={emailUpdates}
            onValueChange={(value) => setEmailUpdates(value)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Edit Profile</Text>
          <AntDesign name="right" size={13} color={colors.spotifyWhite} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Terms and Services</Text>
          <AntDesign name="right" size={13} color={colors.spotifyWhite} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>About STN</Text>
          <AntDesign name="right" size={13} color={colors.spotifyWhite} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacy Policy</Text>
          <AntDesign name="right" size={13} color={colors.spotifyWhite} />

        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );

};
export default SettingsScreen

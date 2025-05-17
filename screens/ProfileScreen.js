// screens/ProfileScreen.js
import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const user = {
  name: "User Name",
  email: "user@example.com",
  profileImage: "https://via.placeholder.com/150/82E0AA/FFFFFF?Text=User",
  bio: "A news enthusiast!",
}

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        {user.bio && <Text style={styles.bio}>{user.bio}</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text>Edit Profile</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text>Settings</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text>Notifications</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text>Saved Articles</Text>
          <Ionicons name="bookmark-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text>Dark Mode</Text>
          {/* You might use a Switch component here */}
          <Ionicons name="moon-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
        <Ionicons name="log-out-outline" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 8,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 20,
    flexDirection: "row",
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
  },
})

export default ProfileScreen

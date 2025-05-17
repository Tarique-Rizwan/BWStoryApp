// screens/DiscoverScreen.js
import React from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const newsData = [
  {
    id: "1",
    title: "Breaking News Title 1",
    source: "Source A",
    imageUrl: "https://via.placeholder.com/300/FFC107/000000?Text=News1",
  },
  {
    id: "2",
    title: "Interesting Story 2",
    source: "Source B",
    imageUrl: "https://via.placeholder.com/300/4CAF50/FFFFFF?Text=News2",
  },
  {
    id: "3",
    title: "Another Headline Here",
    source: "Source C",
    imageUrl: "https://via.placeholder.com/300/2196F3/FFFFFF?Text=News3",
  },
  // Add more news items here
]

const categoryData = [
  { id: "sports", name: "Sports" },
  { id: "politics", name: "Politics" },
  { id: "technology", name: "Technology" },
  // Add more categories
]

const DiscoverScreen = () => {
  const renderNewsItem = ({ item }) => (
    <TouchableOpacity style={styles.newsItem}>
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.newsImage} />
      )}
      <View style={styles.newsTextContainer}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsSource}>{item.source}</Text>
      </View>
    </TouchableOpacity>
  )

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        {/* You might add search or filter icons here */}
      </View>

      <View style={styles.categoriesSection}>
        <FlatList
          horizontal
          data={categoryData}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Top Stories</Text>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  categoriesSection: {
    paddingVertical: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  newsItem: {
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  newsSource: {
    fontSize: 12,
    color: "gray",
  },
})

export default DiscoverScreen

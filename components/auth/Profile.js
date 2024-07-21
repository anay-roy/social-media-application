import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust the icon library based on your preference

const ProfilePage = ({ navigation }) => {
  // Dummy data for profile information and posts
  const profileData = {
    username: 'Captain America',
    profileImage: require('../assets/captainamerica.jpeg'),
    followers: 1200,
    following: 300,
  };

  const initialPosts = [
    { id: '1', imageUrl: require('../assets/obito.jpeg') },
    { id: '2', imageUrl: require('../assets/ironman.jpeg') },
    { id: '3', imageUrl: require('../assets/captainamerica.jpeg') },
    { id: '4', imageUrl: require('../assets/man.png') },
  ];

  // State for posts
  const [posts, setPosts] = useState(initialPosts);

  // Number of posts count
  const postsCount = initialPosts.length;

  // Function to handle navigation back to the main page
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Top Section: Profile Picture, Followers, Following */}
        <View style={styles.section}>
          <View style={styles.profileHeader}>
            <Image source={profileData.profileImage} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.username}>{profileData.username}</Text>
              <View style={styles.followContainer}>
                <Text style={styles.followText}>{profileData.followers} Followers</Text>
                <Text style={styles.followText}>{profileData.following} Following</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Second Section: Number of Posts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Posts</Text>
          <Text style={styles.postsCount}>{postsCount}</Text>
        </View>

        {/* Third Section: Display Posts in Stacked Card Format */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest Posts</Text>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.postCard}>
                <Image source={item.imageUrl} style={styles.postImage} />
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.postListContainer}
          />
        </View>
      </ScrollView>

      {/* Icon Button to navigate back to main page */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: 'white',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followText: {
    fontSize: 16,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  postsCount: {
    fontSize: 24,
    color: '#333',
  },
  postListContainer: {
    paddingVertical: 10,
  },
  postCard: {
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  postImage: {
    width: 150,
    height: 150,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 30,
    elevation: 3,
  },
});

export default ProfilePage;

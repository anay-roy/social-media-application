import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';

const Homepage = ({ navigation }) => {
  // Dummy data for top stories, posts, and profile suggestions
  const topStories = [
    { id: '1', username: 'user1', profileImage: require('../assets/obito.jpeg') },
    { id: '2', username: 'user2', profileImage: require('../assets/ironman.jpeg') },
    { id: '3', username: 'user3', profileImage: require('../assets/captainamerica.jpeg') },
    { id: '4', username: 'user4', profileImage: require('../assets/obito.jpeg') },
    { id: '5', username: 'user5', profileImage: require('../assets/ironman.jpeg') },
    { id: '6', username: 'user6', profileImage: require('../assets/captainamerica.jpeg') },
  ];

  const initialPosts = [
    { id: '1', username: 'postuser1', imageUrl: require('../assets/obito.jpeg'), likes: 20, comments: 5 },
    { id: '2', username: 'postuser2', imageUrl: require('../assets/ironman.jpeg'), likes: 30, comments: 10 },
    { id: '3', username: 'postuser3', imageUrl: require('../assets/captainamerica.jpeg'), likes: 25, comments: 8 },
    { id: '4', username: 'postuser4', imageUrl: require('../assets/obito.jpeg'), likes: 40, comments: 15 },
    { id: '5', username: 'postuser5', imageUrl: require('../assets/obito.jpeg'), likes: 35, comments: 12 },
  ];

  // State for posts and handling likes
  const [posts, setPosts] = useState(initialPosts);

  // Profile suggestions dummy data
  const profileSuggestions = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    username: `suggestion${index + 1}`,
    profileImage: require('../assets/ironman.jpeg'),
  }));

  // Animation states
  const [scaleValue] = useState(new Animated.Value(1));
  const [opacityValue] = useState(new Animated.Value(1));

  const handleProfileIconPress = () => {
    // Navigate to Profile screen
    navigation.navigate('Profile');

    // Perform scale and opacity animation
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleValue, { toValue: 1, duration: 50, useNativeDriver: true }),
      Animated.timing(opacityValue, { toValue: 0.7, duration: 100, useNativeDriver: true }),
      Animated.timing(opacityValue, { toValue: 1, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const handleLikePress = (postId) => {
    // Find the post by postId and update the likes count
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Top Stories Section */}
        <View style={[styles.section, styles.topStoriesSection]}>
          <View style={styles.topArea}>
            <Text style={styles.sectionTopText}></Text>
          </View>
          <Text style={styles.sectionTitle}>Top Stories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topStories.map((profile) => (
              <TouchableOpacity key={profile.id} style={styles.profileContainer}>
                <Image source={profile.profileImage} style={styles.profileImage} />
                <Text numberOfLines={1} style={styles.username}>{profile.username}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Posts Section */}
        <View style={styles.section}>
          <View style={styles.topAreapost}>
            <Text style={styles.sectionTopText}></Text>
          </View>
          <Text style={styles.sectionTitle}>Posts</Text>
          {posts.map((post) => (
            <TouchableOpacity key={post.id} style={styles.postCard} onPress={() => console.log('Post selected')}>
              <Image source={post.imageUrl} style={styles.postImage} />
              <View style={styles.postStats}>
                <View style={styles.postStatsItem}>
                  <Text style={styles.statText}>{post.username}</Text>
                </View>
                <TouchableOpacity style={styles.postStatsItem} onPress={() => handleLikePress(post.id)}>
                  <Image source={require('../assets/heart.png')} style={styles.icon} />
                  <Text style={styles.statText}>{post.likes}</Text>
                </TouchableOpacity>
                <View style={styles.postStatsItem}>
                  <Image source={require('../assets/comment.png')} style={styles.icon} />
                  <Text style={styles.statText}>{post.comments}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Profile Suggestions Section */}
        <View style={[styles.section, styles.suggestionsSection]}>
          <View style={styles.topAreapost}>
            <Text style={styles.sectionTopText}></Text>
          </View>
          <Text style={styles.sectionTitle}>Profile Suggestions</Text>
          <ScrollView horizontal>
            <View style={styles.suggestionsContainer}>
              {profileSuggestions.map((profile) => (
                <TouchableOpacity key={profile.id} style={styles.suggestionItem}>
                  <Image source={profile.profileImage} style={styles.suggestionImage} />
                  <Text numberOfLines={1} style={styles.username}>{profile.username}</Text>
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followText}>Follow</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Profile Icon with animation */}
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={handleProfileIconPress}
        activeOpacity={0.8}
      >
        <Animated.Image
          source={require('../assets/obito.jpeg')}
          style={[
            styles.profileIconImage,
            {
              transform: [{ scale: scaleValue }],
              opacity: opacityValue,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  topStoriesSection: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionsSection: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  topArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    height: 40,
  },
  sectionTopText: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  profileContainer: {
    marginRight: 15,
    alignItems: 'center',
    maxWidth: 100, // Adjust the maximum width of profile containers
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    textAlign: 'center', // Center-align text
    maxWidth: 70, // Limit maximum width to avoid overflow
  },
  postCard: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  postStatsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  statText: {
    fontSize: 12,
    color: '#333',
  },
  suggestionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    maxWidth: 80, // Limit maximum width of suggestion items
  },
  suggestionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  followButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 5,
  },
  followText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 30,
    elevation: 3,
  },
  profileIconImage: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  topAreapost: {
    height: 10
  }
});

export default Homepage;

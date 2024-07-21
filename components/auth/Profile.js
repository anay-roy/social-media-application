import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Dummy data for top stories, posts, and profile suggestions
  const topStories = [
    { id: '1', username: 'user1', profileImage: require('../assets/obito.jpeg') },
    { id: '2', username: 'user2', profileImage: require('../assets/ironman.jpeg') },
    { id: '3', username: 'user3', profileImage: require('../assets/captainamerica.jpeg') },
  ];

  const posts = [
    { id: '1', imageUrl: require('../assets/obito.jpeg'), likes: 20, comments: 5 },
    { id: '2', imageUrl: require('../assets/ironman.jpeg'), likes: 30, comments: 10 },
    { id: '3', imageUrl: require('../assets/captainamerica.jpeg'), likes: 25, comments: 8 },
  ];

  const profileSuggestions = [
    { id: '1', username: 'suggestion1', profileImage: require('../assets/obito.jpeg') },
    { id: '2', username: 'suggestion2', profileImage: require('../assets/ironman.jpeg') },
  ];

  return (
    <Text>Hello</Text>
  )
}

export default ProfileScreen;

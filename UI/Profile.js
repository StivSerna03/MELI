import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import LoginInfo from './LoginInfo';
import Footer from './Footer';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <LoginInfo />
      <Footer />
    </View>
  );
};

export default Profile; 
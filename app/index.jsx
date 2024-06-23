import React from 'react';
import { View, StyleSheet } from 'react-native';
import GetDate from '@/components/GetDate';

const Home = () => {
  return (
    <View style={styles.container}>
      <GetDate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

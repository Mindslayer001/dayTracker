import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GetDate = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to format the date as "dd-mmm-yy"
  const formattedDate = () => {
    const date = new Date(currentTime);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{formattedDate()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default GetDate;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TitleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Duttch!</Text>
    </View>
  );
};

export default TitleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

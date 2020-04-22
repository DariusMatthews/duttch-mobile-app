import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
      <Button title="Sign In" onPress={() => navigation.navigate('Sign In')} />
      <Button
        title="Take Photo of Bill"
        onPress={() => navigation.navigate('Photo')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

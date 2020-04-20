import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/screens/Home';
import SignUp from './components/screens/SignUp';
import SignIn from './components/screens/SignIn';
import PhotoCapture from './components/screens/PhotoCapture';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'Duttch'}}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{headerTitle: 'Register'}}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{headerTitle: 'Log In'}}
        />
        <Stack.Screen
          name="Photo"
          component={PhotoCapture}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

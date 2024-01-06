/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import WarpScreen from './src/screens/WarpScreen';

// const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    // <NavigationContainer style={styles.root}>
    //   <Stack.Navigator initialRouteName="Splash">
    //     <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    //     <Stack.Screen name="Warp" component={WarpScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView style={styles.root}>
      {/* <SplashScreen /> */}
      <WarpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;

import React from 'react'
import { } from 'react-native';
import CategoryListScreen from './Screen/CategoryListScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealOverview from './Screen/MealOverview';


const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoryListScreen}/>
        <Stack.Screen name='MealOverView' component={MealOverview}/>
      </Stack.Navigator>
     
    </NavigationContainer>
    // <MealOverview/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

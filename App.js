import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import CategoryListScreen from './Screen/CategoryListScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverview from './Screen/MealOverview';
import { StatusBar } from 'expo-status-bar'
import MealDetails from './Screen/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#6697c7' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen options={{
            title: 'All Categories',
            headerShown: true,
            headerTitle: (() => <HeaderShow />)
          }} name='Categories' component={CategoryListScreen} />
          <Stack.Screen name='MealOverView' component={MealOverview} />
          <Stack.Screen name='MealDeatils' component={MealDetails}/>
        </Stack.Navigator>

      </NavigationContainer>
    </>

    // <MealOverview/>
  );
}
const HeaderShow = () => {
  return <>
    <View style={styles.headerConatiner}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',marginRight:18, }}>All Categories</Text>
     <View style={styles.input}>
      <Image style={styles.image} source={require('./public/Images/search.png')}/>
     <TextInput
        onChangeText={()=>{}}
        style={styles.inputBox}
        placeholder="Serach Your Meal!!"
      />
     </View>
    </View>
  </>
}

const styles = StyleSheet.create({
  headerConatiner:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
    paddingHorizontal:10,
    marginBottom:10
  },
  input: {
    borderWidth:2,
    borderColor:'#e1e1e1',
    flex:1,
    flexDirection:'row',
    paddingVertical:4,
    alignItems:'center',
    marginRight:20,
    paddingLeft:10,
  },
  image:{
  
  },  

  inputBox:{
    // borderColor:'red',
    // borderWidth:2,
    flex:1,
    paddingVertical:4,
    paddingLeft:12,
  }

});

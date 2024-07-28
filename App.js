import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import CategoryListScreen from './Screen/CategoryListScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverview from './Screen/MealOverview';
import { StatusBar } from 'expo-status-bar'
import MealDetails from './Screen/MealDetails';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FaoraiteMealsScreen from './Screen/FaoraiteMealsScreen';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import FaoraiteMealsCtx from './Store/Context/favorite-context';
import { Provider } from 'react-redux';
import { store1 } from './Store/Redux/store/store';
import Toast from 'react-native-toast-message';
const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator();

const dimensions=Dimensions.get('window').width;


export default function App() {
  const DrawerContainsComponent=()=>{
    return<>
    <Drawer.Navigator screenOptions={{
      drawerActiveTintColor: '#327cc6',
      headerStyle: { backgroundColor: '#327cc6' },
      headerTintColor: 'white',
      drawerLabelStyle:{
        fontSize:18,
      },
      sceneContainerStyle: { backgroundColor: '#b3d0ec' },
      // drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
      drawerContentContainerStyle:{
        marginTop:20,
      },
      drawerStyle: {
        backgroundColor: '#b3d0ec',
        width: 340,
      },
      drawerActiveBackgroundColor:'#327cc6',
      drawerActiveTintColor:'white',


    }}>
      <Drawer.Screen
      options={{
       title:'All Categories',
       drawerIcon:({focused,color,size})=><MaterialIcons name="menu-book" size={size} color={color} />

        
      }}
      name='Categorie'
      component={CategoryListScreen}
      />
     <Drawer.Screen
          name='Favourite'
          component={FaoraiteMealsScreen}
          options={{
            title:'Favourite Meals',
            drawerIcon:({size,color})=><FontAwesome5 name="grin-stars" size={size} color={color} />,
          }}
          />
    </Drawer.Navigator>
    </>
  }
  return (
    <>
      <StatusBar style='light' />
      {/* <FaoraiteMealsCtx> */}
      <Provider store={store1}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#6697c7' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#b3d0ec' }
        }}>
          <Stack.Screen options={{
            title: 'All Categories',
            headerShown: false,
            headerTitle: (() => <HeaderShow />)
          }} name='Categoriess' component={DrawerContainsComponent} />
         
          <Stack.Screen name='MealOverView' component={MealOverview} />
          <Stack.Screen name='MealDeatils' component={MealDetails}/>
        </Stack.Navigator>

      </NavigationContainer>
      <Toast />
      </Provider>
      {/* </FaoraiteMealsCtx> */}
    </>

    // <MealOverview/>
  );
}
const HeaderShow = () => {
  return <>
    <View style={styles.headerConatiner}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',marginRight:18, }}>All Categories</Text>
     {/* <View style={styles.input}>
      <Image style={styles.image} source={require('./public/Images/search.png')}/>
     <TextInput
        onChangeText={()=>{}}
        style={styles.inputBox}
        placeholder="Serach Your Meal!!"
      />
     </View> */}
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

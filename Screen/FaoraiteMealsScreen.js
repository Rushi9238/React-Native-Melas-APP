import { FlatList, Image, ScrollView, StyleSheet, Text, View,Button, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../Data/dummyData";
import IconButton from "../Components/IconButton";
import { GlobalContext } from "../Store/Context/favorite-context";
import MealsItemsList from "../Components/Meals_Item/MealsItemsList";
import { useSelector } from "react-redux";

const FaoraiteMealsScreen = ({}) => {
   const navigation=useNavigation()
// const {favMealsIds}=useContext(GlobalContext)
   const {favMealsIds}=useSelector((select)=>select.favouriteSlice)

   const favMealsList=MEALS.filter((meal)=>favMealsIds.includes(meal.id))
   // console.log('favMealsList',favMealsList);

   if(favMealsList.length==0){
      return<>
      <View style={styles.containerText}>
         <Text style={styles.errorText}>Not your favourite meals list</Text>
         <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
            navigation.navigate("Categorie");
         }}>
      <Text style={styles.buttonText}>Explore Meals</Text>
    </TouchableOpacity>
      </View>
      </>
   }

  return (
     <>
     <MealsItemsList
     items={favMealsList}
     />
     </>
  );
};

export default FaoraiteMealsScreen;


const styles = StyleSheet.create(
    {
      containerText:{
         flex:1,
         alignItems:'center',
         justifyContent:'center'
         
      },
      errorText:{
         fontSize:28,
         fontWeight:'600',
         marginTop:30,

      },
      buttonContainer: {
         paddingHorizontal: 20,
         paddingVertical: 13,
         backgroundColor: '#327cc6',
         borderRadius: 5, 
         marginTop:20,
       },
       buttonText: {
         color: '#FFFFFF',
         textAlign: 'center', 
         fontSize: 22, 
         fontWeight:'600',
       },
    });

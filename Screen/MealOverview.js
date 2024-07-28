import { Text, View,FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS,CATEGORY } from '../Data/dummyData'
import { useNavigation, useRoute } from '@react-navigation/native'
import MealsItems from '../Components/Meals_Item/MealsItems'
import {StatusBar} from 'expo-status-bar'
import MealsItemsList from '../Components/Meals_Item/MealsItemsList'
// import { FlatList } from 'react-native-gesture-handler'

const MealOverview = () => {
  const route=useRoute()
  const navigation=useNavigation()
  const {catId}=route.params
  const filterMealsData=MEALS.filter((item)=>item.categoryIds.indexOf(catId)>=0)
  useLayoutEffect(()=>{
    const filterTitleName=CATEGORY.find((item)=>item.id==catId).title
    navigation.setOptions({
      title:`${filterTitleName} Meals`
    })
  },[catId,navigation])



  return (
   <>
   <MealsItemsList
   items={filterMealsData}
   />
   </>
  )
}

export default MealOverview


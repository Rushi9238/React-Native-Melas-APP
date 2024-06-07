import { Text, View,FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS,CATEGORY } from '../Data/dummyData'
import { useNavigation, useRoute } from '@react-navigation/native'
import MealsItems from '../Components/MealsItems'
import {StatusBar} from 'expo-status-bar'
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

  const mealsRander=(itemData)=>{
    return <MealsItems
          data={itemData.item}
    />
  }

  return (
    <View>
       
      <FlatList
      data={filterMealsData}
      keyExtractor={(item)=>item.id}
      renderItem={mealsRander}
      />
    </View>
  )
}

export default MealOverview


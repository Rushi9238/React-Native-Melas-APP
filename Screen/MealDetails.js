import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MEALS } from '../Data/dummyData'

const MealDetails = () => {
    const route=useRoute()
    const navigation=useNavigation()
    const {mealId}=route.params
    const mealData=MEALS.find((item)=>item.id==mealId)
    useEffect(()=>{
        navigation.setOptions({
          title:`${mealData.title}`
        })
    },[mealId,navigation])
  return (
    <View>
      <Text>MealDetail</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({})
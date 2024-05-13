import { Text, View } from 'react-native'
import React from 'react'

const MealOverview = ({route}) => {
  const {catId}=route.params
  // console.log(catId);
  return (
    <View>
      <Text>MealOverview {catId}</Text>
    </View>
  )
}

export default MealOverview


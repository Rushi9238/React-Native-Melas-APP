import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealsItems from './MealsItems'

const MealsItemsList = ({items}) => {
    const mealsRander=(itemData)=>{
        return <MealsItems
              data={itemData.item}
        />
      }
  return (
    <View>
       
      <FlatList
      data={items}
      keyExtractor={(item)=>item.id}
      renderItem={mealsRander}
      />
    </View>
  )
}

export default MealsItemsList

const styles = StyleSheet.create({})
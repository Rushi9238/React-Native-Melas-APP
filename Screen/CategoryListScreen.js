import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORY } from '../Data/dummyData'
import CategoriesGrid from '../Components/CategoriesGrid'

const CategoryListScreen = ({navigation}) => {
    const renderCategoriesItms=(itemData)=>{
      const handelNavigation=()=>{
        navigation.navigate('MealOverView',{
          catId:itemData.item.id
        })
      }
        return(
            <>
            <CategoriesGrid 
            title={itemData.item.title} 
            color={itemData.item.color} 
            handelPress={handelNavigation}
            />
            </>
        )
    }
  return (
   <>
    <FlatList
    data={CATEGORY}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoriesItms}
    numColumns={2}
    // numColumns={2}
    />
   </>
  )
}

export default CategoryListScreen

const styles = StyleSheet.create({})
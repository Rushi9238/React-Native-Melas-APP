import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesGrid = ({title,color,handelPress}) => {
  return (
    <View style={[styles.cardItem,{backgroundColor:color}]}>
      <Pressable 
      android_ripple={{color:'gray'}}
      onPress={handelPress}
      >
        <View style={styles.cardInnerContainer}>
            <Text style={styles.catText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoriesGrid

const styles = StyleSheet.create({
  cardItem:{
    flex:1,
    margin:16,
    height:170,
    // elevation:3,
   shadowColor:'#fff',
   shadowOpacity:0.25,
   shadowOffset:{width:0,height:5},
  //  borderWidth:2,
  //  borderColor:'red',
  overflow:'hidden',
  backgroundColor:'#fff',
  borderRadius:8,
  },
  cardInnerContainer:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  catText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#374181',
  }
})
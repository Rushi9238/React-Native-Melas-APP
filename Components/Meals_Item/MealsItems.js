import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MealsItems = ({ data = {} }) => {
  const navigate=useNavigation()
  return (
    <View style={styles.mealItemContainer}>
      <Pressable onPress={()=>navigate.navigate("MealDeatils",{
        mealId:data?.id
      })} android_ripple={{color:'red'}}>
        <View>
          <Image style={styles.image} source={{ uri: data.imageUrl }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data?.title}</Text>
          <View style={styles.subTextView}>
            <Text style={styles.subText}>{data?.duration}min</Text>
            <Text style={styles.subText}>{data?.affordability}</Text>
            <Text style={styles.subText}>{data?.complexity}</Text>
            <Text style={styles.subText}>{data?.id}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealsItems

const styles = StyleSheet.create({
  mealItemContainer: {
    overflow: 'hidden',
    margin: 20,
    borderRadius: 8,
    elevation: 4

  },
  image: {
    width: '100%',
    height: 200,

  },
  textContainer:{
    width:'100%',
    backgroundColor:'#fff',
    paddingLeft:12,
    paddingVertical:8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTextView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginVertical:8,
  },
  subText:{
    marginRight:10,
    fontSize:14,
    color:'#e1e1e1',
    backgroundColor:'gray',
    padding:3,
    paddingHorizontal:6,
    borderRadius:6,
    textTransform:'uppercase',
  }

})
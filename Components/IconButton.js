import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const IconButton = ({iconName,iconSize,iconColor,onPressProp}) => {
  

  return (
   <Pressable onPress={onPressProp}>
    <FontAwesome name={iconName} size={24} color="#fff" />
   </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({})
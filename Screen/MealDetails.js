import { FlatList, Image, ScrollView, StyleSheet, Text, View,Button } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../Data/dummyData";
import IconButton from "../Components/IconButton";
import { GlobalContext } from "../Store/Context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addSingleFavMeal, removeSingleFavMeal } from "../Store/Redux/slice/favouriteSlice";
import Toast from 'react-native-toast-message';


const MealDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const {favMealsIds}=useSelector((select)=>select.favouriteSlice)
  // console.log('data',favMealsIds);
  // const favMealsIds=['m1'];
  // console.log('favMealsIds',favMealsIds);
  // const {favMealsIds,addSingleFavMeal,removeSingleFavMeal}=useContext(GlobalContext)
  const { mealId } = route.params;
  const mealData = MEALS.find((item) => item.id == mealId);
  const isMealFavorite=favMealsIds.includes(mealId);

  useEffect(() => {
    navigation.setOptions({
      title: `${mealData.title}`,
    });
  }, [mealId, navigation]);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton
        iconName={isMealFavorite?'star':'star-o'}
        onPressProp={handelPressHeaderButton}
        />
      }
    })
  },[navigation,handelPressHeaderButton,isMealFavorite])

  const handelPressHeaderButton=()=>{
    // console.log("pressed!!!!");
    if(isMealFavorite){
      dispatch(removeSingleFavMeal(mealId));
      Toast.show({
        type: 'info',
        text1: 'Warn 😮',
        text2: 'You have remove your favourite meal!! 😲',
        visibilityTime:4000,
      },2000);
    }
    else{
      dispatch(addSingleFavMeal(mealId));
      Toast.show({
        type: 'success',
        text1: 'Great👌!!! ',
        text2: 'You have add your favourite meal!!👍🏻',
        visibilityTime:4000,
      },2000);
    }
  }
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <View style={styles.imageContaier}>
        <Image style={styles.imageDiv} source={{ uri: mealData.imageUrl }} />
        <View style={[styles.absTag,{ backgroundColor: mealData?.isVegetarian ? 'green' : 'red' }]}>

          <Text style={[styles.absTagText]}>{mealData?.isVegetarian?'Veg':'Non-Veg'}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.mealTitle}>{mealData?.title}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.subTextView}>
          <Text style={styles.subText}>{mealData?.duration}min</Text>
          <Text style={styles.subText}>{mealData?.affordability}</Text>
          <Text style={styles.subText}>{mealData?.complexity}</Text>
        </View>
      </View>
   <View style={styles.listTextContainer}>
   <MealCommonComponents DataList={mealData?.ingredients} heading={"Ingredients are use"}/>
   <MealCommonComponents DataList={mealData?.steps} heading={"Steps to cook"}/>
   </View>

      
    </View>
      </ScrollView>
  );
};

export default MealDetails;

const MealCommonComponents=({DataList,heading})=>{

  return <>
   <View >
        <View>
          <Text style={styles.listTitle}>{heading}</Text>
        </View>
        <View>
        {
          DataList.map((item,index)=>{
            return <Text style={styles.listText} key={index}>
             {index+1} ] {item}
            </Text>
          })
        }
        </View>
      </View>
  </>
}

const styles = StyleSheet.create({
  imageDiv: {
    width: "100%",
    height: 300,
  },
  mealTitle: {
    fontSize: 32,
    color: "#5a5959",
    textAlign: "center",
    marginVertical: 15,
    fontWeight:'bold'
  },
  textContainer:{
    width:'100%',
    // backgroundColor:'#fff',
    paddingLeft:12,
    paddingVertical:0,
  },
  subTextView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:0,
    textAlign:'center'
  },
  subText:{
    marginRight:20,
    fontSize:18,
    color:'white',
    backgroundColor:'gray',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:6,
    textTransform:'uppercase',
  },
  listTextContainer:{
    paddingBottom:40,
  },
  listTitle:{
    fontSize:24,
    color:'#5a5959',
    marginVertical:20,
    textAlign:'center',
    fontWeight:'500',
    borderBottomColor:'#e1e1e1',
    borderBottomWidth:2,
    marginHorizontal:60,
    paddingBottom:9,
  },
  listText:{
    fontSize:20,
    color:"#5a5959",
    paddingLeft:30,
    marginVertical:5,
  },
  imageContaier:{
    position:'relative',
  },
  absTag:{
    position:'absolute',
    bottom:20,
    left:20,
    borderRadius:6,
  },
  absTagText:{
    color:'#fff',
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:4,
    textAlign:'center',
  },
});

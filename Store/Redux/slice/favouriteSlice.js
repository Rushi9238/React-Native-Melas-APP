import {createSlice}from '@reduxjs/toolkit';

const favouriteSlice=createSlice({
    name:'FavouriteMeals',
    initialState:{
        favMealsIds:[],
    },
    reducers:{
        addSingleFavMeal:(state,action)=>{
            // console.log('action',action.payload);
            state.favMealsIds.push(action.payload);
        },
        removeSingleFavMeal:(state,action)=>{
            state.favMealsIds.splice(state.favMealsIds.indexOf(action.payload.id),1);
        }

    }
})
export const {removeSingleFavMeal,addSingleFavMeal}=favouriteSlice.actions;
export default favouriteSlice.reducer;

import {configureStore} from '@reduxjs/toolkit';
import favouriteSlice from '../slice/favouriteSlice';

export const store1=configureStore({
    reducer:{
        favouriteSlice,
    }
})
import { createContext, useState } from "react";

export const GlobalContext = createContext();

const FaoraiteMealsCtx = ({ children }) => {
    const [favMealsIds,setFavMealsIds]=useState([])
    const addSingleFavMeal=(id)=>{
        setFavMealsIds((currenMelas)=>[...currenMelas,id]);
    }
    const removeSingleFavMeal=(id)=>{
        setFavMealsIds((currenMelas)=>currenMelas.filter((item)=>item!=id))
    }

    const values={
        favMealsIds:favMealsIds,
        addSingleFavMeal:addSingleFavMeal,
        removeSingleFavMeal:removeSingleFavMeal,
    }

  return (
    <>
      <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
    </>
  );
};
export default FaoraiteMealsCtx;

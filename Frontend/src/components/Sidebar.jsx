import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchparam,setsearchparam]=useSearchParams()
  const initial=searchparam.getAll("rating")
  const [category,setcategory]=useState(initial||[])
  const initialValue=searchparam.getAll("category")
  const [categoryValue,setcategoryValue]=useState(initialValue||[])
const [sort,setsort]=useState(searchparam.get("sort")||"price")
const [order,setOrder]=useState(searchparam.get("order")||"")
  
  


  const handleInput=(e)=>{
let newcategory=[...category]
let value=e.target.value
if(newcategory.includes(value)){
  newcategory.splice(newcategory.indexOf(value,1))
}else{
  newcategory.push(value)
}
// console.log(category)
setcategory(newcategory)
  }
  const handleInputDat=(e)=>{
    let newcategoryValue=[...categoryValue]
    let value=e.target.value
    if(newcategoryValue.includes(value)){
      newcategoryValue.splice(newcategoryValue.indexOf(value,1))
    }else{
      newcategoryValue.push(value)
    }
    // console.log(category)
    setcategoryValue(newcategoryValue)
      }

     


const HandleSort=(e)=>{
  setOrder(e.target.value)
 

}
// console.log("hhhghjh",searchparam.get("order"))
  useEffect(()=>{
   
    setsearchparam(setQuert())
  },[category,categoryValue,order])

 const setQuert=()=>{
  let param={
    rating:category,
    category:categoryValue,
  }
  if(order){
   param={...param,sort:sort,order:order}
  }
  return param
  }
  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        {/* <input data-testid="movie-filter-1" type="checkbox" onChange={handleInput} value="1" checked={category.includes("1")} />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-2" type="checkbox"  onChange={handleInput} value="2" checked={category.includes("2")} />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label> */}
        <br />
        <input data-testid="movie-filter-3" type="checkbox"  onChange={handleInput} value="3"  checked={category.includes("3")}/>
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-4" type="checkbox"  onChange={handleInput} value="4"  checked={category.includes("4")}/>
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInput} value="5" checked={category.includes("5")} />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
        <br />
      <br />
        <h3>Filter by Category</h3>
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInputDat} value="mobile" checked={categoryValue.includes("mobile")}/>
        <label >Mobile</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInputDat} value="clothes" checked={categoryValue.includes("clothes")} />
        <label >clothes</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInputDat} value="watch" checked={categoryValue.includes("watch")} />
        <label >watch</label>
      </div>
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input data-testid="movie-sort-asc"  type="radio" name="sort"  onChange={HandleSort} value="asc" />
        <label>Ascending</label>
        <br />
        <input data-testid="movie-sort-desc" name="sort"  type="radio" onChange={HandleSort} value="desc"/>
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  //  width: 15%;
  // paddind:10px
  border-right: 1px solid gray;
`;

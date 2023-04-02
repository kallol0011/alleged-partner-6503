import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import  "./Sidebar.css"
// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchparam,setsearchparam]=useSearchParams()
  const initial=searchparam.getAll("rating")
  const [category,setcategory]=useState(initial||[])
  const initialValue=searchparam.getAll("category")
  const [categoryValue,setcategoryValue]=useState(initialValue||[])

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

const HandleSort=()=>{

}
  useEffect(()=>{
    let param={
      rating:category,
      category:categoryValue
    }
    setsearchparam(param)
  },[category,categoryValue])

  return (
    
    <DIV >
      <h3 style={{fontSize:"20px",paddingBottom:"5px",paddingRight:"5px",marginTop:"20px"}}>Filter by Rating</h3>
      <div>
        <input data-testid="movie-filter-1" type="checkbox" onChange={handleInput} value="1" checked={category.includes("1")} />
        <label className='social_text' style={{paddingLeft:"7px"}}>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-2" type="checkbox"  onChange={handleInput} value="2" checked={category.includes("2")} />
        <label className='social_text' style={{paddingLeft:"7px"}}>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-3" type="checkbox"  onChange={handleInput} value="3"  checked={category.includes("3")}/>
        <label className='social_text' style={{paddingLeft:"7px"}}>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-4" type="checkbox"  onChange={handleInput} value="4"  checked={category.includes("4")}/>
        <label className='social_text' style={{paddingLeft:"7px"}}>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInput} value="5" checked={category.includes("5")} />
        <label className='social_text' style={{paddingLeft:"7px"}}>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
        <br />
      <br />
        <h3 style={{fontSize:"20px",paddingBottom:"5px",paddingRight:"5px"}}>Filter by Category</h3>
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInputDat} value="mobile" checked={categoryValue.includes("mobile")}/>
        
        <label style={{paddingLeft:"7px"}}  className='social_text'>Mobile</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInputDat} value="clothes" checked={categoryValue.includes("clothes")} />
        <label className='social_text' style={{paddingLeft:"7px"}}>clothes</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox"  onChange={handleInputDat} value="watch" checked={categoryValue.includes("watch")} />
        <label className='social_text' style={{paddingLeft:"7px"}}>watch</label>
      </div>
      <br />
      <br />
      <h3 style={{fontSize:"20px",paddingBottom:"5px",paddingRight:"5px"}}>Sort By Price</h3>
      <div>
        <input data-testid="movie-sort-asc" type="radio" onChange={HandleSort} value="asc" />
        <label className='social_text' style={{paddingLeft:"7px"}}>Ascending</label>
        <br />
        <input data-testid="movie-sort-desc" type="radio" onChange={HandleSort} value="desc"/>
        <label className='social_text' style={{paddingLeft:"7px"}}>Descending</label>
      </div>
    </DIV>
    
  );
};

const DIV = styled.div`
  // width: 15%;
  border-right: 1px solid gray;
`;


// .social_text:hover{
//   transform: scale(1.2);
//   transition: 2s;
//   /* color: rgb(128, 128, 177); */
//   color:#89b0eb
// }
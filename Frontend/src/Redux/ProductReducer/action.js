import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"
import axios from "axios"




export const getProducta=(data)=>(dispatch)=>{
    
    dispatch({type:GET_PRODUCT_REQUEST})
console.log(data)
    if(data?.rating?.length<=0||data?.category?.length<=0){
        axios.get("https://strange-crown-worm.cyclic.app/product").then((res)=>{
            dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
           // console.log(res.data)
       }).catch((err)=>{
           dispatch({type:GET_PRODUCT_FAILURE})
       })
    }else{
        axios.get("https://strange-crown-worm.cyclic.app/product/filter",data).then((res)=>{
            dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
           // console.log(res.data)
       }).catch((err)=>{
           dispatch({type:GET_PRODUCT_FAILURE})
       })
    }
}
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getProducta } from '../Redux/ProductReducer/action'
import {useDispatch, useSelector} from "react-redux"
import ProductCard from './ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
const ProductList = () => {
  const [searchparam,setsearchparam]=useSearchParams()
  const initial=searchparam.getAll("rating")
  const initialcat=searchparam.getAll("category")
  const initialOder=searchparam.get("order")
  const initialSort=searchparam.get("sort")
  const location=useLocation()
  const Dispatch=useDispatch()
const {isLoading,isError,products}=useSelector((store)=>store.proReducer)

//  const deat=products.sort((a,b)=>b.price-a.price)
//  console.log("data",deat)
let obj={
  params:{
    rating:initial,
    category:initialcat,
    sort:initialSort,
    order:initialOder
  },
 }

  useEffect(()=>{
    Dispatch(getProducta(obj))
  },[location.search])

  
  return <>
  <Box>
    {products.map((el,i)=>{
   return <ProductCard {...el} key={i+1}/>
    })}
  </Box>
  </>
}

export default ProductList
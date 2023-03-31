import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";
const initial={
    isLoading:false,
    isError:false,
    products:[]
}
const reducer=(state=initial,action)=>{
    const {type,payload}=action
    switch (type) {
        case GET_PRODUCT_REQUEST:return {...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:return {...state,isLoading:false,products:payload}
        case GET_PRODUCT_FAILURE:return {...state,isLoading:false,isError:true}
        default:
            return state;
    }
}
export {reducer}
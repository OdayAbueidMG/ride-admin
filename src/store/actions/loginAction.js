import * as actionTypes from "./actionTypes"
import nativeAxios from "axios"



// log in action
export const loginAction = (email,pass) => dispatch=>{
    dispatch({type:actionTypes.START_LOGIN})
    
    nativeAxios.post("http://qa.ride-int.com:8000/api/admin/api-login",{
        username:email,
        password:pass
     },{
        headers:{
            "publicKey":"RJ94rmEt5P1kSBL8vMnIOF6HKpwyou",
            "secretKey":"RnYV05yHq27XkfOwE9sUZx8u4ZJhQo",
            "Accept":"application/json",
            "aliasname":"ride"
        }
    })
    .then(res=>{
        
        if(res.data.access_token){
            const token = `${res.data.token_type} ${res.data.access_token}`
            dispatch({
                type:actionTypes.LOGIN_SUCCESS,
                token,
                email})
        }else{
            dispatch({
                type:actionTypes.LOGIN_FAILD,
                error_message:res.data.message})
        }
    })
    .catch(err=>{
        dispatch({
            type:actionTypes.LOGIN_FAILD,
            error_message:"Not found"})
    })
};


// log out action 
export const logoutAction = ()=> dispatch=>{
    return dispatch({type:actionTypes.LOGIN_FAILD})
}

export const loginAction = (email,pass)=>dispatch=>{
  
    
    return dispatch({type:"LOGIN",user:{email,pass}})
};



export const logoutAction = ()=>dispatch=>{

    
    return dispatch({type:"LOGOUT"})
};


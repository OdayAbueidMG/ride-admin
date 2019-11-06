
const initialState ={
    isLogged:false,
    email:"",
    menuItems:null
}



const auth =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLogged:true,
                email:action.user.email,
                menuItems:[{
                    title:"الرئيسية",
                    icon:"home",
                    route:"home"},
                {
                    title:"السائقين",
                    icon:"directions_car",
                    route:"drivers"},
                {
                    title:"الرحلات",
                    icon:"navigation",
                    route:"trips"}
                ]
            }
        case "LOGOUT":
            return {
                ...state,
                isLogged:false,
                email:"",
                menuItems:null
            }
    }
    return state
}


export default auth
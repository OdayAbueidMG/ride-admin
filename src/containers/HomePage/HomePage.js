import React, { Component } from 'react'
import styles from "./homepage.module.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"
import {loginAction} from "../../store/actions/loginAction"
import LinearProgress from '@material-ui/core/LinearProgress';
import { theme } from '../../config/theme';
import Aux from "../../hoc/Aux"

export class HomePage extends Component {

    state={
        email:"",
        password:"",
        email_error:false,
        password_error:false,
    };

    emailHandler =(e)=>{
        //regexp to check if the format of the entered email is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(e.target.value).toLowerCase())){
            this.setState({
                email:e.target.value,
                email_error:false
            })
        }else{
            this.setState({
                email:e.target.value,
                email_error:true
            })
        }
       
    };

    passwordHandler = (e)=>{
        this.setState({password:e.target.value,password_error:false})
    }



    loginHandler = ()=>{

        if(this.state.email_error){
            return
        }
        if(this.state.email===""){
            this.setState({email_error:true})
            return
        }
        if(this.state.password===""){
            this.setState({password_error:true})
            return
        }

        this.props.Login(this.state.email,this.state.password)
    }


    render() {
        return (
            
                
            <div className={styles.container}>
                <div className={styles.progressBar}>
                  {this.props.isLoading?<LinearProgress />:null}
                </div>
                <div className={styles.loginBox_wraper}>
                <div className={styles.LoginBox}>
                    <div className={styles.LoginBox_Title} ><h1 style={{color:theme().palette.primary.main}}>RIDE</h1>
                    </div>
                    
                    <div className={styles.LoginBox_Input}>
                    <TextField 
                     required
                     error={this.state.email_error}
                     value={this.state.email}
                     onChange={this.emailHandler}
                     label="البريد الإلكتروني"
                     margin="normal"
                     type="email"
                     variant="outlined"/>
                     </div>
                    <div className={styles.LoginBox_Input}>
                    <TextField 
                    required
                    error={this.state.password_error}
                    value={this.state.password}
                    onChange={this.passwordHandler}
                     label="كلمة المرور"
                     type="password"
                     margin="normal"
                     variant="outlined"/>
                     </div>
                     <div className={styles.LoginBox_Input}>
                     <Button 
                     type="submit"
                     onClick={this.loginHandler}
                     variant="contained" 
                     color="primary" 
                     style={{marginTop:15}} >
                       تسجيل الدخول
                    </Button>
                     </div>
                    
                </div>
                </div>
                
            </div>
            
        )
    }
};


const mapStateToProps = (state)=>{
    return {
        isLoading:state.auth.isLoading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        Login:(email,pass)=>dispatch(loginAction(email,pass))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

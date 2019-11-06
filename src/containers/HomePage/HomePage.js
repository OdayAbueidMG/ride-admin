import React, { Component } from 'react'
import styles from "./homepage.module.css"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"
import {loginAction} from "../../store/actions/loginAction"

export class HomePage extends Component {

    state={
        email:"",
        password:""
    };

    emailHandler =(e)=>{
        this.setState({
            email:e.target.value
        })
    };

    passwordHandler = (e)=>{
        this.setState({password:e.target.value})
    }


    loginHandler = ()=>{
        this.props.Login(this.state.email,this.state.password)
    }


    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
            <div className={styles.container}>
                <div className={styles.LoginBox}>
                    <div className={styles.LoginBox_Title} ><h1>RIDE</h1></div>
                    <div className={styles.LoginBox_Input}>
                    <TextField 
                     value={this.state.email}
                     onChange={this.emailHandler}
                     label="Email"
                     margin="normal"
                     variant="outlined"/>
                     </div>
                    <div className={styles.LoginBox_Input}>
                    <TextField 
                    value={this.state.password}
                    onChange={this.passwordHandler}
                     label="password"
                     margin="normal"
                     variant="outlined"/>
                     </div>
                     <div className={styles.LoginBox_Input}>
                     <Button 
                     onClick={this.loginHandler}
                     variant="contained" 
                     color="primary" 
                     style={{marginTop:15}} >
                        Log in
                    </Button>
                     </div>
                     
                </div>
            </div>
            </Grid>
            </Grid>
        )
    }
};


const mapDispatchToProps = dispatch =>{
    return{
        Login:(email,pass)=>dispatch(loginAction(email,pass))
    }
}


export default connect(null,mapDispatchToProps)(HomePage);

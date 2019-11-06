import React, { Component } from 'react';
import styles from "./Auth.module.css"
import Button from '@material-ui/core/Button';
import {logoutAction} from "../../store/actions/loginAction";
import {connect} from "react-redux"
 class Auth extends Component {



    render() {
        return (
            <div className={styles.container}>
                <div className={styles.LoginBox}>
                <div className={styles.LoginBox_Input}>
                     <Button 
                     onClick={this.props.logout}
                     variant="contained" 
                     color="primary" 
                     style={{marginTop:15}} >
                        Log out
                    </Button>
                </div>
                </div>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => {
    return{
        logout:()=>dispatch(logoutAction())
    }
}

export default connect(null,mapDispatchToProps)(Auth)

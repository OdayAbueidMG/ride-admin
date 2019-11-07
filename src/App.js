import React,{Component} from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./config/theme"
import MainLayout from "./layout/MainLayout"
import {BrowserRouter as Router} from "react-router-dom";
import Pages from "./containers/Router/Router"
import HomePage from "./containers/HomePage/HomePage"
import { connect } from 'react-redux'


// to config rtl direction
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



 class App extends Component {

    

  render(){
    
    const isLogged = this.props.isLogged;
    
    // check if the user logged render admin app else login screen
    let whatToShow =(
            <Router>
            <MainLayout>
               <Pages/>
             </MainLayout>
            </Router>
                    )
  
    if(!isLogged){
      whatToShow=(<HomePage/>)
    }
    return (
       <StylesProvider jss={jss}>
        <ThemeProvider theme={theme("rtl")}>
          {whatToShow}
        </ThemeProvider>
       </StylesProvider>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    isLogged:state.auth.isLogged,
    token:state.auth.token
  }
}

export default connect(mapStateToProps)(App);

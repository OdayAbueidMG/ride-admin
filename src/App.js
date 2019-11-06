import React from 'react';
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



 class App extends React.Component {


  render(){
    
    const isLogged = this.props.isLogged;
    
    // check if the user logged render admin app else login screen
    let whatToShow =(
            <MainLayout>
              <Pages/>
            </MainLayout>
                    )
  
    if(!isLogged){
      whatToShow=(<HomePage/>)
    }
    return (
      <Router>
      <div dir="rtl">
       <StylesProvider jss={jss}>
        <ThemeProvider theme={theme("rtl")}>
        {whatToShow}
        </ThemeProvider>
       </StylesProvider>
      </div>
      </Router>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    isLogged:state.auth.isLogged
  }
}

export default connect(mapStateToProps)(App);

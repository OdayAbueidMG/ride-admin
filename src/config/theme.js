import { createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';


export const theme = (dir)=>{

    return responsiveFontSizes(createMuiTheme({
        typography:{
            fontFamily:"Cairo"
        },
        zIndex:{
            mobileStepper: 1000,
            speedDial: 1050,
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
            snackbar: 1400,
            tooltip: 1500
        },
        direction:dir
      }))
}
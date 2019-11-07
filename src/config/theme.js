import { createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';


export const theme = (dir)=>{

    return responsiveFontSizes(createMuiTheme({
        typography:{
            fontFamily:"Cairo",
            
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
        direction:dir,
        palette: {
            primary: {
             // light: will be calculated from palette.primary.main,
              main: '#4479a5',
              dark: '#14588d',
              error:"#980000"
              // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
              //light: '#0066ff',
              main: '#4379a4',
              // dark: will be calculated from palette.secondary.main,
            //  contrastText: '#ffcc00',
            },
            // error: will use the default color
          },
        
      }))
}


/*
PRIMARY_DARK  : "#14588d", // Status bar, ...
  PRIMARY  : "#4479a5", // Buttons, Headers, Icons, ...
  ACCENT : "#77acd6", //
  TEXT: "#FEFEFE", //
​
  WHITE : "#F2F2F2",
  BLACK : "#242a38",
  GRAY : "#a7a9ac",
​
  // Fallback(s), Backward compatibility
  DANGER: "#980000", // Errors, Network connections alerts, ...
  WARNING: "#ffa940",
​
  SECONDARY : "#4379a4",
  SECONDARY_LITE : "#76acd7",
  */
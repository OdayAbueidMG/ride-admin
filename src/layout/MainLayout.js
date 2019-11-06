import React,{useState} from 'react'
import NavBar from "../components/header/NavBar"
import Drawer from "../components/Drawer/Drawer"
import Grid from '@material-ui/core/Grid';


const  MainLayout = (props)=> {

const [isDrawerOpen,setIsDrawerOpen] = useState(true)

    const isDrawerOpenHandler = ()=>{
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <NavBar isDrawerOpen={isDrawerOpen} isDrawerOpenHandler={isDrawerOpenHandler}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                <Drawer isDrawerOpenHandler={isDrawerOpenHandler} isDrawerOpen={isDrawerOpen}/>
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                {props.children}
                </Grid>
                
            </Grid>  
        </div>
    )
}

export default MainLayout

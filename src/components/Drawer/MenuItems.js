import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import {theme} from "../../config/theme"



const MenuItems=(props)=> {
    
    const menuItems = useSelector(state=>state.auth.menuItems)

    return (
        <div style={styles.container} >
            <div style={styles.list}>
            <List>
                {menuItems.map((item) => (
                    <Link to={item.route} style={{textDecoration:"none",color:theme().palette.primary.light}}>
                <ListItem button key={item.title}>
                    <ListItemIcon><i style={{color:theme().palette.primary.dark}} className="material-icons">{item.icon}</i></ListItemIcon>
                   
                   <ListItemText primary={item.title} />
                   </ListItem>
                </Link>
                ))}
            </List>
            </div>
            
        </div>
    )
}


const styles = {
    container:{
        flexGrow:1
    },
    list:{
        width:300
    }
}

export default MenuItems

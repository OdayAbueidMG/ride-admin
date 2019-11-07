import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from "./drivers.module.css";
import axios from "../../axios"


export class drivers extends Component {


    test = ()=>{
        axios.get("/ok")
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1 onClick={this.test}>Drivers</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(drivers)

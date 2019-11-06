import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from "./drivers.module.css";



export class drivers extends Component {

    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>Drivers</h1>
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

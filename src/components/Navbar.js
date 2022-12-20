import React from 'react' 
import logo from '../images/logo.png'

const styles = {
    padding: {
        paddingLeft: '10px'
    }
}

export default function Navbar() {
    return (
        <>
            <h1 className='header'><img className='logo' src={logo} alt='logo'/><span style={styles.padding}>My Travel Journal</span></h1>
        </>
    )
}
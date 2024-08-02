import React from 'react'

const Header = (props) => {
    return (<>
        
        <div class='responsiv-div'> <h1>This is Header.</h1>
            <p>this is para for header.
            </p>
            <p>My name is {props.name}</p></div></>
    )
}

export default Header
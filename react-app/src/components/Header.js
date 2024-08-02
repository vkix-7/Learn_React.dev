import React from 'react'

const Header = (props) => {
    return (<>
        
        <div class='responsiv-div'> <h1>This is Header.</h1>
            The header element represents introductory content or a set of navigational aids within an HTML document.
            It’s not the visible top portion of a web page (like the header you see on a website), but rather a container for metadata and essential information.
            <p>My name is {props.name}</p></div></>
    )
}

export default Header
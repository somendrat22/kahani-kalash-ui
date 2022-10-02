import React, { Component } from 'react';


const Bookinfo = ({props}) => {
    return ( 
        <div className = "book_container">
            <div className = "book_img">
                <img src  = {props.book_img}></img>
            </div>
            <div className = "book_text_container">
                <h1></h1>
            </div>
        </div>
     );
}
 
export default Bookinfo;
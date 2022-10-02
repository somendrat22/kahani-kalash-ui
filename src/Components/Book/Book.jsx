import React, { Component } from 'react';
import Bookinfo from '../Book_info/Bookinfo';
import infoobj from "./Bookinfoobj"
const Book = () => {
    return ( 
        infoobj.map(function(obj){
            return(
                <Bookinfo props = {obj}></Bookinfo>
            )
        })
     );
}
 
export default Book;
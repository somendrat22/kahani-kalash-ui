import React from 'react';
import styled from "styled-components";
import {Link} from  "react-router-dom";


const Header = () => {
    return (
        <Nav>
            <Logo>
                <Link to  = "/">
                    <img src = "/images/kahani_kalash_logo.jpeg" alt = "Logo"></img>
                </Link>
            </Logo>
            <NavMenu>
                <Link to = "/poems">
                    <span>KAVITA</span>
                </Link>
                <Link to = "/Kahani">
                    <span>KAHANI</span>
                </Link>
                <Link to = "/ebook">
                    <span>BOOK</span>
                </Link>
                <Link to = "/blog">
                    <span>BLOG</span>
                </Link>
            </NavMenu>
            <Search>
                <input placeholder = "search" type = "text"></input>
                <button type = "submit">
                <i class="fas fa-search"></i>
                </button>
            </Search>
            <Login>

            </Login>
        </Nav>
    );
}
 
const Nav = styled.nav`
 position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 140px;
    background-color: rgb(118,97,56);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 36px;
    -webkit-letter-spacing: 16px;
    -moz-letter-spacing: 16px;
    -ms-letter-spacing: 16px;
    letter-spacing: 16px;
    z-index: 3;
    border-bottom: 1px solid grey;
    position : relative;
`;
const Logo = styled.a`
    padding: 0px;
    width: 159px;
    margin-top: 4px;
    font-size: 0;
    display: inline-block;
    height: 121px;  
    img{
        width: 100%;
        padding: 10px;
        height: 116px;
    }
`;
 const NavMenu = styled.div`
    align-items : center;
    display : flex;
    flex-flow : row nowrap;
    height : 100%;
    justify-content : flex-end;
    padding : 0px;
    position : relative;
    margin-right : auto;
    margin-left : 25px;

    a {
        display : flex;
        align-items : center;
        padding : 0 12px;

            img {
                height : 20px;
                min-width : 20px;
                width : 20px;
                z-index : auto;
            }

            span {
                color : rgb(0, 0, 0);
                font-size : 20px;
                font-weight: bold;
                letter-spacing : 1.42px;
                line-height : 1.08;
                padding : 2px 0px;
                white-space : nowrap;
                position : relative;

                &:before {
                    background-color : rgb(0, 0, 235);
                    border-radius : 0px 0px 4px 4px;
                    left : 0px;
                    bottom : -6px;
                    content : "";
                    height : 2px;
                    opacaity : 0;
                    position : absolute;
                    right : 0px;
                    transform-origin : left center;
                    transform : scaleX(0);
                    transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0&;
                    visibility : hidden;
                    width :auto; 
                }
            }

            &:hover {
                span: before {
                    transform : scaleX(1);
                    visibility : visible;
                    opacity : 1 !important;
                }
            }
            

    }

    

    @media (max-width : 768px) {
        display : none;
    }
`

const Search = styled.div`
 width: 100%;
 display: flex;

 input{
    width: 200px;
    border: 3px solid #00B4CC;
    border-right: none;
    padding: 9px;
    height: 36px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
    margin-left: 500px;
 }
 button{
     width: 40px;
     height: 36px;
     border: 1px solid #00B4CC;
     background: #00b4cc;
     text-align: center;
     color: #fff;
     border-radius: 0 5px 5px 0;
     cursor: pointer;
     font-size: 20px;
 }
`

const Login = styled.div`

` 

export default Header;
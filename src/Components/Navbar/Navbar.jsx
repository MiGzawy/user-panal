import React from "react";
import 'animate.css';
import "./style.scss"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBars, faDashboard, faFileCircleExclamation, faFolderTree, faHomeLg, faHomeUser, faMarker, faMortarPestle, faObjectGroup, faObjectUngroup, faPalette, faPlaneUp, faRandom, faScaleBalanced, faZap } from "@fortawesome/free-solid-svg-icons";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";

// import { Searchbar } from "../Searchbar/Searchbar";
export const Navbar =()=>{
    return(
            <div className="container">
            <div className="header" data-text="Heading">Heading</div>
            
            <NavLink to="/">
            <div className="heading-home">Home</div>
            </NavLink>
            
            <NavLink to="/Shop" >
            <div className="heading-shop">Shop</div>
            </NavLink>
            <div className="heading-about">About</div>
            <div className="heading-contact" >Contact</div>
            
            <NavLink to='/Signin'>
            <span className="heading-signin">Sign in</span>
            </NavLink>
            <NavLink to='/Signin'>
            <FontAwesomeIcon icon={faBars} className="search-icon" color='#fff'/>
            </NavLink>
        </div>
        
    )
}
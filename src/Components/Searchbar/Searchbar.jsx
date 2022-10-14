import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './style.scss'
import 'animate.css'
export const Searchbar=()=>{
    return(
        <div className="search-container">
            <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search..."/>
            <i><FontAwesomeIcon icon={faSearch} className="search-icon" color='#4bcffa'/></i>
            </div>
        </div>    
    )
}
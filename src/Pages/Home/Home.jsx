import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Main } from "../../Components/Main/Main";
import {Searchbar} from '../../Components/Searchbar/Searchbar'
import { Blocks } from "../../Components/Blocks/Blocks";


export const Home =()=>{
    return(
        <>
           <Navbar/> 
           <Main/>
           <Searchbar/>
           <Blocks/>
        </>
    )
}
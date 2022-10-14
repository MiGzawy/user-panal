import React from "react";
import { Items } from "../../assests/data";
import './style.scss'
import 'animate.css'
import { NavLink } from "react-router-dom";

export const Blocks=()=>{
    return(
        <div className="block-container">
            {
                Items.map((item)=>{
                    return(
                        <div key={item.mainTitle}>
                            <div className="block-name">
                                <h1>{item.mainTitle}</h1>
                                <br/>
                                <h3>{item.subTitle}</h3>
                            </div>
                            <ul className="block-items">
                                {
                                    item.item.map((item)=>{
                                        return(
                                            <NavLink
                                                key={item.name}
                                                className={({isActive})=>isActive ? 'block-items active' : 'block-items'}>
                                                   <span>
                                                    {item.name}
                                                    {item.type}
                                                    {item.price}
                                                   </span>
                                                   
                                            </NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
import React from "react";
// import { Items } from "../../assests/data";
import './style.scss'
import 'animate.css'
import { Timer } from "../../Components/Timer/Timer";
// import { NavLink } from "react-router-dom";

export const Blocks=()=>{
    return(
        <div className="box-container">
            <div className="box-heading">
                <h1>Trending Instant Auction </h1>
                <h3></h3>
            </div>
            <div className="box">
                <h2>Fridge</h2>
                <p>Auction Ends After</p>
                <Timer/>
                <div className="detail-container">Pictures</div>
                <div className="detail-container">Details</div>
                <div className="detail-container">Price</div>
                
                <div className="detail-container">Description</div>

                <button>Attempt</button>
            </div>
            <div className="box">
            <h2>Car</h2>
            <p>Auction Ends After</p>
            <Timer/>
            <div className="detail-container">Pictures</div>
            <div className="detail-container">Details</div>
            <div className="detail-container">Price</div>

            <div className="detail-container">Description</div>
            <button>Attempt</button>
            </div>
            <div className="box">
            <h2>House</h2>
            <p>Auction Ends After</p>
            <Timer/>
            <div className="detail-container">Pictures</div>
            <div className="detail-container">Details</div>
            <div className="detail-container">Price</div>
            <div className="detail-container">Description</div>
            <button>Attempt</button>
            </div>



            <div className="box-heading">
                <h1>Trending Timed Auction </h1>
                <h3></h3>
            </div>
            <div className="box">
                <h2>Fridge</h2>
                <p>Auction Ends After</p>
                <Timer/>
                <div className="detail-container">Pictures</div>
                <div className="detail-container">Details</div>
                <div className="detail-container">Price</div>
                <div className="detail-container">Description</div>
                <button>Attempt</button>
            </div>
            <div className="box">
            <h2>Car</h2>
            <p>Auction Ends After</p>
            <Timer/>
            <div className="detail-container">Pictures</div>
            <div className="detail-container">Details</div>
            <div className="detail-container">Price</div>

            <div className="detail-container">Description</div>
            <button>Attempt</button>
            </div>
            <div className="box">
            <h2>House</h2>
            <p>Auction Ends After</p>
            <Timer/>
            <div className="detail-container">Pictures</div>
            <div className="detail-container">Details</div>
            <div className="detail-container">Price</div>
            <div className="detail-container">Description</div>
            <button>Attempt</button>
            </div>
            
        </div>






        // <div className="block-container">
        //     {
        //         Items.map((item)=>{
        //             return(
                        

        //                 <div key={item.mainTitle}>
        //                     <div className="block-name">
        //                         <h1>{item.mainTitle}</h1>
        //                         <br/>
        //                         <h3>{item.subTitle}</h3>
        //                     </div>
        //                     <div className="block-box">
        //                         <ul className="block-items">
        //                         {
        //                             item.item.map((item)=>{
        //                                 return(
        //                                     <NavLink
        //                                         key={item.name}
        //                                         className={({isActive})=>isActive ? 'block-items active' : 'block-items'}>
        //                                            <span>
        //                                             {item.name}
        //                                             {item.type}
        //                                             {item.price}
        //                                            </span>
                                                   
        //                                     </NavLink>
        //                                 )
        //                             })
        //                         }
        //                     </ul>
        //                     </div>

                            
                            
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
    )
}
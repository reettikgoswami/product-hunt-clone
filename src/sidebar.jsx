import React from "react"
import Contributers from "./onlineSection";
import Newsletter from "./newsletter";

import "./stylesheet/style.scss"

let obj = {thumbnail :{
  image_url : null
},
topics: null ,
votes_count : 0
}

function Sidebar(props){
return (
       <div className="contribution_section">
            <h4 className="col2_header">Makers working today</h4>
            <div className="col2_img_container">
              {props.user.map(cv => (
                <Contributers {...cv} />
              ))}
            </div>
            <h4 className="start_working_heading">start working now</h4>
             <Newsletter/>
              <div className="newsletter_subscribe_container">

                <from className="add_product_form">
                  <input  
                      onChange={e => (obj.name = e.target.value)} 
                    className="subscribe_input"
                    placeholder="product name"
                  ></input>
                  <input
                  onChange={e => (obj.thumbnail.image_url = e.target.value)}            
                    className="subscribe_input"
                    placeholder="product image"
                  ></input>
                  <input
                  onChange={e => (obj.topics = e.target.value)} 
                    className="subscribe_input"
                    placeholder="product tag"
                  ></input>
                  <input 
                  onChange={e => (obj.tagline = e.target.value)}    
                    className="subscribe_input"
                    placeholder="product description"
                  ></input>

                  <button 
                    onClick={e=> props.addproduct(obj)}             
                    className="subscribe"
                    type="submit"
                  >add product</button>
                </from>

            </div> 
          </div>)

              }         


export default Sidebar;              
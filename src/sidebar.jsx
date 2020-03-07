import React from "react"
import Contributers from "./col2";
import Newsletter from "./newsletter";

import "./stylesheet/col2.scss"

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
                {/* <from>
                  <input
                    onChange={e => (obj.name = e.target.value)}
                    className="subscribe_input"
                    placeholder="product name"
                  ></input>
                  <input
                    onChange={e => (obj.img = e.target.value)}
                    className="subscribe_input"
                    placeholder="product image"
                  ></input>
                  <input
                    onChange={e => (obj.tags = e.target.value.split(" "))}
                    className="subscribe_input"
                    placeholder="product tag"
                  ></input>
                  <input
                    onChange={e => (obj.description = e.target.value)}
                    className="subscribe_input"
                    placeholder="product description"
                  ></input>
                  <input
                    onClick={e => this.updateState(obj)}
                    className="subscribe"
                    type="submit"
                  ></input>
                </from> */}
            </div> 
          </div>)

              }         


export default Sidebar;              
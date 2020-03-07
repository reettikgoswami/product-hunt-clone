import React from "react"
import "./stylesheet/onlineSection.scss";

function contributers(props){
  return ( 
     <span className="contributer_img">
       <img className="responsive_image" src={props.img} alt=""/>
       </span>
  )
}
export default contributers;


import React from "react"
import "./col2.scss";
let contributers = (props)=>{
  return ( 
     <span className="contributer_img">
       <img className="responsive_image" src={props.user.img} alt=""/>
       </span>
  )
}
export default contributers;


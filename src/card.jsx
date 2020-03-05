import React from "react";
import "./stylesheet/card.scss";

let Card = props => {
  return (
    <div className="product_container">
      <div className="product_img_container">
        <img className="responsive_img" src={props.img} alt="" />
      </div>
      <div className="product_info_container">
        <h3 className="product_name">{props.name}</h3>
        <h4 className="product_info">{props.description}</h4>
        {props.tags.map(tag => (
          <button className="product_tag">{tag}</button>
        ))}
      </div>
      <div onClick={()=>props.updateCount(props.id)} className="upvote_container">
        <div className="vote">
          <span  className="upvote_icon"> &#9652;</span>
          <span className="upvote_number">{props.upvote}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

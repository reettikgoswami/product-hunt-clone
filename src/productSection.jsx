import React from "react"
import Card from "./card";

import "./stylesheet/style.scss";

function productSection( props ){
   console.log("product" ,props.product);
  return (
  <div>
  <div className="col1_header_flex">
    <span className="today_heading">Today</span>
    <span>
      <button className="filter_button">popular</button>
      <button className="filter_button">newest</button>
    </span>
  </div>

  {   
  props.product.map(product => (
    <Card {...product} updateCount={props.updateCount} />
  ))}

</div>
 )
}
export default productSection
import React from "react"
import ReactDom from "react-dom";
import Card from "./card";
import Header from "./header"
import "./stylesheet/style.scss";
import Contributers from "./col2"
let data = [
{
   img : "https://ph-files.imgix.net/ef226b52-c84e-41f8-a433-335dd35f90f3?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
   description : "Explore and analyze data without SQL or Excel",
   name : "Datawaves",
   tags : [ "ANALYTICS","DEVELOPER TOOLS" ],
   upvote : 24,
},
{
  img : "https://ph-files.imgix.net/b2d336ea-0c78-430c-8891-cad23d6e316a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
  name : "Explo",
  description : "Explore and analyze data without SQL or Excel",
  tags : [ "WEB APP","ANALYTICS" ,"SCSS" ,"TECH"],
  upvote : 233,
},
{
  img : "https://ph-files.imgix.net/1c6a5e7a-eae1-49a8-a1c3-4362fd209b62?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
  name : "Battlecar",
  description : "Simulate realistic verbal conversations",
  tags : [ "TECH"],
  upvote : 122,
},
{
  img : "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
  name : "SaaS Landing Page",
  description : "The best SaaS landing page examples for design inspiration.",
  tags : [ "DESIGN TOOLS", "DEVELOPER TOOLS" ],
  upvote : 456,
}
]

let user = [
  {
    img : "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
  },
  {
    img : "https://ph-avatars.imgix.net/17305/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
  },
  {
    img : "https://ph-avatars.imgix.net/1263444/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
  },
  {
    img : "https://ph-avatars.imgix.net/826276/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/94353/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/2096165/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img : "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  }
]

let Cards = (props)=>{ 
  return (
    <div>
    < Header />
   < div className="main_container">
    <div>
      <div className="col1_header_flex"><span className="today_heading">Today</span> <span> <button className="filter_button">popular</button><button className="filter_button">newest</button></span> </div>
    {props.data.map(product => < Card data {...product} /> )  
   }
  </div>
  <div className="contribution_section">
    <h4 className="col2_header">Makers working today</h4> 
    <div className="col2_img_container">
    {
     props.user.map(cv => < Contributers user={cv} /> )
    }        
  </div>
  <h4 className="start_working_heading">start working now</h4>
    </ div>
     </div>
   </div>) 
}


ReactDom.render(< Cards data = {data} user = {user}  /> , document.getElementById('root'));
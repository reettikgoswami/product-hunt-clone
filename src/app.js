import React from "react";
import Header from "./header";
import "./stylesheet/style.scss";
import Sidebar from "./sidebar";
import ProductSection from "./productSection";

require('dotenv').config();

let user = [
  {
    img:
      "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
  },
  {
    img:
      "https://ph-avatars.imgix.net/17305/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
  },
  {
    img:
      "https://ph-avatars.imgix.net/1263444/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
  },
  {
    img:
      "https://ph-avatars.imgix.net/826276/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/94353/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2096165/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  }
];

class Cards extends React.Component {                                                                                                                                                                                  
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      img: user,
      token : process.env.REACT_APP_SECRET
    };
  }
  updateCount = id => {    
    let updateVote = this.state.data.map(product => {
      if (product.id === id) {
        product.votes_count += 1;
      }
      return product;
    });
    this.setState({ data: updateVote });
  };

  addproduct = obj =>{
    obj.topics = obj.topics.split(",").map(tag=>{
      return {name : tag};
    })
   obj.id = Date.now();
   this.setState({data : this.state.data.concat(obj)});
  }
 
 componentDidMount(){ 
   
   fetch("https://api.producthunt.com/v1/posts" , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.state.token}`,
      'Host': 'api.producthunt.com'
    }
   })
   .then((response) => response.json())
      .then((responseData) => {
        console.log("token" , process.env.REACT_APP_SECRET);
        console.log(responseData);
        this.setState({data : responseData.posts});
      })
      .catch(err=>{console.log(err)});
    }

  render() {  
    return (
      <>
        <Header />

        <div className="main_container">

         <ProductSection product={this.state.data} updateCount={this.updateCount} />
         
         <Sidebar user={user} addproduct = {this.addproduct}/>

        </div>
      </>
    );
  }
}

export default Cards;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
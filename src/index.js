import React from "react";
import ReactDom from "react-dom";
import Card from "./card";
import Header from "./header";
import "./stylesheet/style.scss";
import Contributers from "./col2";
import Newsletter from "./newsletter";
let id = 0;
let obj = {
  id: Date.now(),
  upvote: 0
};

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
      img: user
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

  
  updateState = obj => {
    this.setState({ data: this.state.data.concat(obj) });
  };
 
 componentDidMount(){ 
   fetch("https://api.producthunt.com/v1/posts" , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "uuHisA0iPQoAc_FQ6pAzXPlsDbtuvbEqHORprrWdADY",
      'Host': 'api.producthunt.com'
    }
   })
   .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData.posts);
        this.setState({data : responseData.posts});
      })
      .catch(err=>{console.log(err)});
  }



  render() {
    // console.log( this.state.data);
    return (
      <div>
        <Header />
        <div className="main_container">
          <div>
            <div className="col1_header_flex">
              <span className="today_heading">Today</span>
              <span>
                <button className="filter_button">popular</button>
                <button className="filter_button">newest</button>
              </span>
            </div>
            {
            
            this.state.data.map(product => (
              <Card {...product} updateCount={this.updateCount} />
            ))}
          </div>
          <div className="contribution_section">
            <h4 className="col2_header">Makers working today</h4>
            <div className="col2_img_container">
              {this.state.img.map(cv => (
                <Contributers {...cv} />
              ))}
            </div>
            <h4 className="start_working_heading">start working now</h4>
           
           
             <Newsletter/>

              <div className="newsletter_subscribe_container">
                <from>
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
                </from>
            </div>
         
          </div>
        </div>
      </div>
    );
  }
}



ReactDom.render(<Cards user={user} />, document.getElementById("root"));

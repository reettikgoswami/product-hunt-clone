import React from "react";
import ReactDom from "react-dom";
import Card from "./card";
import Header from "./header";
import "./stylesheet/style.scss";
import Contributers from "./col2";
// import { ReactComponent } from "*.svg";
let id = 0;
let obj = {
  id: Date.now(),
  upvote: 0
};

let product = [
  {
    img:
      "https://ph-files.imgix.net/ef226b52-c84e-41f8-a433-335dd35f90f3?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    description: "Explore and analyze data without SQL or Excel",
    name: "Datawaves",
    tags: ["ANALYTICS", "DEVELOPER TOOLS"],
    upvote: 24,
    id: id++
  },
  {
    img:
      "https://ph-files.imgix.net/b2d336ea-0c78-430c-8891-cad23d6e316a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    name: "Explo",
    description: "Explore and analyze data without SQL or Excel",
    tags: ["WEB APP", "ANALYTICS", "SCSS", "TECH"],
    upvote: 233,
    id: id++
  },
  {
    img:
      "https://ph-files.imgix.net/1c6a5e7a-eae1-49a8-a1c3-4362fd209b62?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    name: "Battlecar",
    description: "Simulate realistic verbal conversations",
    tags: ["TECH"],
    upvote: 122,
    id: id++
  },
  {
    img:
      "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    name: "SaaS Landing Page",
    description: "The best SaaS landing page examples for design inspiration.",
    tags: ["DESIGN TOOLS", "DEVELOPER TOOLS"],
    upvote: 456,
    id: id++
  },
  {
    img:
      "https://ph-files.imgix.net/899092dc-5023-4586-b6ee-aeead3ee4daa?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    name: "Project Reports for Slack",
    description: "Visualize your team's progress directly in Slack. Free.",
    tags: ["SLACK", "PRODUCTIVITY"],
    upvote: 456,
    id: id++
  }
];

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
      data: product,
      img: user
    };
  }

  updateCount = id => {
    console.log("done");
    let updateVote = this.state.data.map(product => {
      if (product.id === id) {
        product.upvote += 1;
      }
      return product;
    });
    this.setState({ data: updateVote });
  };

  updateState = obj => {
    this.setState({ data: this.state.data.concat(obj) });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main_container">
          <div>
            <div className="col1_header_flex">
              <span className="today_heading">Today</span>{" "}
              <span>
                {" "}
                <button className="filter_button">popular</button>
                <button className="filter_button">newest</button>
              </span>{" "}
            </div>
            {this.state.data.map(product => (
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

            <h4 className="newsletter_header">newsletter</h4>
            <div className="newsletter_container">
              <span>
                <img
                  className="newsletter_img"
                  src="https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&auto=compress&codec=mozjpeg&cs=strip"
                  alt="subscribe"
                />
                <h4 className="newsletter_subheader">
                  Remote teams, this is for you
                </h4>
              </span>
              <div className="newsletter_subscribe_container">
                <p className="subscribe_quote">
                  Get the best new products in your inbox, every day{" "}
                  <span role="img" aria-label="jsx-a11y/accessible-emoji">
                    👇
                  </span>
                </p>
                <input className="subscribe_input" placeholder="Your email" />
                <button className="subscribe">subscribe</button>
              </div>

              {/* create from */}

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
      </div>
    );
  }
}



ReactDom.render(<Cards user={user} />, document.getElementById("root"));

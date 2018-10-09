import React, { Component } from "react";
import ChildComponent from "./Checkpoint3child";
class Checkpoint3 extends Component {
  state = {};
  render() {
    const title = {
      paddingBottom: "15px",
      color: "#757575"
    };
    const background = {
      backgroundColor: "#f5f5f5",
      padding: "50px"
    };
    return (
      <React.Fragment>
        <div style={background}>
          <h1 style={title}>Notre equipe</h1>

          <div className="container-fluid">
            <div className="row">
              <ChildComponent
                gender="male"
                name="Kabil Jbeli"
                job="Founder"
                type="CEO"
                image="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/43003396_1983866924968541_4306691573170569216_n.jpg?_nc_cat=109&oh=9cd3d2df77062374bde820715061b083&oe=5C4E33A1"
              />
              <ChildComponent
                gender="male"
                name="Kabil Jbeli 2"
                job="Founder 2"
                type="CEO 2"
                image="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/43003396_1983866924968541_4306691573170569216_n.jpg?_nc_cat=109&oh=9cd3d2df77062374bde820715061b083&oe=5C4E33A1"
              />
              <ChildComponent
                gender="male"
                name="Kabil Jbeli 3"
                job="Founder 3"
                type="CEO 3"
                image="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-0/c0.0.370.370/p370x247/43003396_1983866924968541_4306691573170569216_n.jpg?_nc_cat=109&oh=9cd3d2df77062374bde820715061b083&oe=5C4E33A1"
              />
              <ChildComponent
                gender="female"
                name="test 2"
                job="Founder 4"
                type="CEO 4"
                image="https://image.shutterstock.com/image-photo/young-professional-asian-woman-dressed-260nw-763122805.jpg"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkpoint3;

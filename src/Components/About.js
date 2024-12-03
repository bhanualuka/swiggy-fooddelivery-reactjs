import UserClass from "./ClassComponents/UserClass";
import User from "./User";
import React from "react";

class AboutClass extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");

    this.state = {
      location: "Nagarkurnoll",
    };
  }

  render() {
    // console.log("Parent Render()");

    return (
      // const { name, Contact, location }=this.state.props
      <div>
        <h1>About Page!!!</h1>
        <User
          name={"Bhanu prakash"}
          Contact="alukabhanuprkash@gmail.com"
          location={this.state.location}
        />

        <UserClass
          name={"first"}
          Contact="alukabhanuprkash@gmail.com"
          location={this.state.location}
        />

        <UserClass
          name={"second"}
          Contact="alukabhanuprkash@gmail.com"
          location={this.state.location}
        />
      </div>
    );
  }
}

export default AboutClass;

/* 
const About = () => {
  const location = "Nagarkurnool";
  return (
    <div>
      <h1>About Page!!!</h1>
      <User
        name={"Bhanu prakash"}
        Contact="alukabhanuprkash@gmail.com"
        location={location}
      />

      <UserClass
        name={"first"}
        Contact="alukabhanuprkash@gmail.com"
        location={location}
      />

      <UserClass
        name={"second"}
        Contact="alukabhanuprkash@gmail.com"
        location={location}
      />
    </div>
  );
};
export default About;
 */





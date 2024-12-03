import React from "react";

class UserClass extends React.Component {
  // To acess props in class based components we use constructor method and super() function
  constructor(props) {
    super(props);
    // console.log(this.props.name, "constructor(){}");

    /* 
    this.state = {
      name: this.props.name,
      location: this.props.location,
      contact: this.props.Contact,
    }; */

    this.state = {
      profile: {
        login: "Dummy",
        avatar_url: "Hyderabad",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/bhanualuka");
    const res = await data.json();

    console.log(res);

    this.setState({
      profile: res,
    });

    // console.log(this.props.name, "ComponentDiMOunt()");
  }

  componentDidUpdate() {
    // console.log("Component Did Update()");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }
  render() {
    // const { name, location, Contact } = this.props;
    // console.log(this.props.name, "Render()");

    return (
      <div className="About-container">
        <h1>Class Based Component</h1>
        {/*  <h3>name: {this.props.name} </h3>
        <h4>Location: {this.props.location} </h4>
        <h5> contact: {this.props.Contact} </h5> */}

        {/*  <h4> {this.state.name} </h4>
        <h5>{this.state.location}</h5>
        <h6> {this.state.contact} </h6> */}

        {/* <h3> Count:{this.state.count} </h3> */}

        {/*  <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Incremant
        </button> */}

        <h3> name:{this.state.profile.login} </h3>

        <img
          src={this.state.profile.avatar_url}
          alt="FakeImage"
        />
      </div>
    );
  }
}

export default UserClass;

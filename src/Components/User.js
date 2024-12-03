const User = (props) => {
  const { name, location, Contact } = props;
  return (
    <div className="About-container">
      <h1>Functional Based Component</h1>
      <h3>name:{props.name}</h3>
      <h4>Location:{props.location} </h4>
      <h5> contact: {props.Contact} </h5>
    </div>
  );
};

export default User;

import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      {/* <h1> Oops!!</h1>
      <h1>Something Went Wrong</h1> */}
      <h1> {error.status} </h1>
      <h1>{error.statusText}</h1>
      {/* <h3>{error.error.message}</h3> */}
    </div>
  );
};

export default Error;

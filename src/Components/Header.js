import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilits/customHooks/useOnlineStatus";
import { UserContext } from "../utilits/context/UserContext";
import { MailContext } from "../utilits/context/MailContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // Custom Hook.
  const Status = useOnlineStatus();

  // useContext
  const UserNameConsume = useContext(UserContext);
  // console.log(UserNameConsume);

  const Mail = useContext(MailContext);
  // console.log(Mail);

  const { loggedInUser } = UserNameConsume;

  // Redux Toolkit
  const cartlength = useSelector((store) => store.cart.items);

  // let btnName = "Login";

  // UseEffect it default behavious is to  call itself  for every render
  /*  useEffect(() => {
    console.log("useEffect Calls");
  });
   */

  /*  //  when we pass a empty dependecny array to useEffect Hook as second argument it calls only once after component renders
  useEffect(() => {
    console.log(" useEffect With dependency");
  }, []);
 */

  // when we pass something (state or props) inside  the depenedcy array it  calls the when the state or props changed
  /*  useEffect(() => {
    console.log("Component Did update");
  }, [btnName]); */

  return (
    <div
      className="flex justify-between  bg-slate-300 shadow-gray-300"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="">
        <img
          className="w-[100px]"
          src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg?semt=ais_hybrid"
          alt=""
        />
      </div>

      <div className="nav-items">
        <ul className="flex  mr-16 mt-4">
          <li className="p-4">Online Status: {Status ? "🔴" : "✅"}</li>

          <li className="p-4 text-lg  ">
            <Link to="/" className=" hover:text-gray-500 ">
              HOME
            </Link>{" "}
          </li>
          <li className="p-4 text-lg  ">
            <Link to="/about" className=" hover:text-gray-500 ">
              {" "}
              ABOUT US
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link to="/contact" className=" hover:text-gray-500 ">
              CONTACT
            </Link>
          </li>
          <li className="p-4 text-lg ">
            <Link to="/grocery" className=" hover:text-gray-500 ">
              GROCERY{" "}
            </Link>
          </li>

          <li className="p-4 text-lg">
            <Link to="/cart" className=" hover:text-gray-500 ">
              CART({cartlength.length})
            </Link>{" "}
          </li>

          <button
            className="login-btn text-lg w-[66px] border border-gray rounded-md bg-blue-200"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className=" font-bold text-lg pt-4 pl-4"> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

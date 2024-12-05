import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import useOnlineStatus from "../utilits/customHooks/useOnlineStatus";
import { UserContext } from "../utilits/context/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterdRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const Status = useOnlineStatus();

  console.log(listOfRestaurant);
  const { userName, setUserName } = useContext(UserContext);
  console.log(userName);

  // Local Data
  /*   const [data, setData] = useState([
    {
      id: "750132",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
      action: {
        link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
        text: "Dosa",
      },
    },
    {
      id: "750644",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
      action: {
        link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
        text: "Idli",
      },
    },
  ]); */

  useEffect(() => {
    const SwiggyData = async () => {
      const Data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.489785&lng=78.4014429&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const swiggyJson = await Data.json();
      // console.log(swiggyJson);

      setListOfRestaurant(
        swiggyJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilterRestaurant(
        swiggyJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };

    SwiggyData();
  }, []);

  if (Status) {
    return <h1> "Oops!.. looks like your offline" </h1>;
  }

  return (
    <>
      <div className="flex m-6 ">
        <div className="flex px-4">
          <label htmlFor="userNAme" className="mt-1 font-bold  ">
            UserName:
          </label>
          <input
            type="text"
            id="userNAme"
            placeholder="username.."
            className="border border-gray-300 mr-6 rounded-lg"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="border border-gray-400 shadow-md rounded-md bg-green-100 "
            type="text"
            placeholder="Search Food here.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />

          <button
            className="ml-6 px-6 border border-gray-300 shadow-lg bg-pink-200 rounded-md "
            onClick={() => {
              console.log(searchText);

              const searchData = listOfRestaurant.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilterRestaurant(searchData);
            }}
          >
            Search
          </button>
        </div>

        <div className="fil-but">
          <button
            className=" ml-[50px] w-[200px] bg-blue-100  shadow-lg rounded-md text-black-900 py-1 "
            onClick={() => {
              const filterData = listOfRestaurant.filter((item) => {
                return item.info.avgRating > 4;
              });
              setFilterRestaurant(filterData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        <RestaurantCard Data={filterdRestaurant} />
      </div>
    </>
  );
};

export default Body;

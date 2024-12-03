import { useEffect, useState } from "react";
import useRestaurantMenu from "../utilits/customHooks/useRestaurantMenu";
import { BASE_URL_IMAGE } from "../utilits/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  // const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  // useRestaurant Cutom Hook (For Api call)
  const resMenu = useRestaurantMenu(resId);
  // console.log(useParams());

  // console.log(resId);

  // const resMenu = useRestaurantMenu(resId)

  {
    if (resMenu == null) return <ShimmerUI />;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = resMenu?.cards[2]?.card.card.info;
  // console.log(name);

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  if (!itemCards) {
    return "No Items are Fetched Come later";
  }

  return (
    <div>
      <div className="ml-[50px] mt-[35px] text-center ">
        <h2 className="font-bold text-xl"> {name} </h2>
        <p className="font-bold text-sm">
          {avgRatingString}- ({totalRatingsString})
          <span> {costForTwoMessage} </span>
        </p>
        <small className="font-bold">{cuisines.join(" , ")}</small>
      </div>




















      {/* Menu image card */}
        <div className="flex flex-wrap">
        {itemCards.map((item) => {
          const {
            card: {
              info: { id, name, imageId, price, defaultPrice },
            },
          } = item;

          return (
            <div key={id}>
              <div className="p-6 m-2 w-[250px]  h-[300px]  rounded-lg border border-lightBlue bg-gray-100 hover:bg-neutral-200 cursor-pointer ">
                <img
                  className="w-[250px] rounded-lg"
                  src={`${BASE_URL_IMAGE}${imageId}`}
                  alt="Menuimage"
                />
                {name} -- {price / 100 || defaultPrice}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

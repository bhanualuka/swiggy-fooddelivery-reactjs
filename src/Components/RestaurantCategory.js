import {useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data, show, setShowIndex }) => {
  // const [show, setShow] = useState(false);
  // console.log(data);

  const handleAcord = () => {
    // setShow(!show);
    setShowIndex();
  };


  return (
    <div className="m-4 p-3 shadow-lg rounded-xl cursor-pointer">
      <div onClick={handleAcord} className="flex justify-between">
        <span className="font-bold text-xl">
          {data.title}({data.itemCards.length})
        </span>

        <div className="w-80px hover: shadow-lg rounded-full">
          <span className="">⬇️</span>
        </div>
      </div>
      {show && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

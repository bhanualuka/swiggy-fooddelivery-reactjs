import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const SwiggyApi = () => {
  // const [data, setData] = useState();

  const baseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

  useEffect(() => {
    const SwiggyData = async () => {
      const Data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.489785&lng=78.4014429&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const swiggy = await Data.json();
      console.log(swiggy);
    };

    SwiggyData();
  }, []);

  return (
    <>
      <h1>Jai Sai master jai bapuji maharaj</h1>
{/* 
     {data.map((item) => {
        return (
          <div>
            <img src={`${baseURL}${item.imageId}`} alt="" />
          </div>
        );
      })} */}
    </>
  );
};

export default SwiggyApi;

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(<SwiggyApi />);

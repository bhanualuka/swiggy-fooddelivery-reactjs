import { BASE_URL_IMAGE } from "../utilits/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className=" flex justify-between my-6 pb-8  border-b-2"
          >
            {/* <h3>{item.card.info.id}</h3> */}
            <div>
              <span className="font-bold text-base text-gray-800">
                {item.card.info.name}
              </span>
              <h4 className="font-bold text-lg">
                &#8377;
                {item.card.info.price
                  ? parseInt(item.card.info.price / 100)
                  : Math.floor(item.card.info.defaultPrice / 100)}
              </h4>

              <div className="my-4">
                <span className="text-green-600 my-6 py-2">★</span>
                <span className="my-6  py-4 font-bold text-lg text-green-600">
                  {item.card.info.ratings.aggregatedRating.rating
                    ? item.card.info.ratings.aggregatedRating.rating
                    : ""}
                </span>
              </div>

              <p className="text-gray-600 my-8 ">
                {item.card.info.description
                  ? item.card.info.description
                  : "A delightful and delicious dish prepared with the freshest ingredients, perfect for any occasion."}
              </p>
            </div>
            <div className="text-right">
              <img
                className="w-48  h-36  rounded-lg"
                src={BASE_URL_IMAGE + item.card.info.imageId}
                alt=""
              />
              <button className="text-green-700 font-bold text-xl mr-2 mb-10 w-28 h-8 rounded-lg border border-gray-350 hover:bg-gray-300">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

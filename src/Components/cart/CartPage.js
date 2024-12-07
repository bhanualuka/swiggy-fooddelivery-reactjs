import { useDispatch, useSelector } from "react-redux";
import { BASE_URL_IMAGE } from "../../utilits/constants";
import { clearItem } from "../../utilits/ReduxToolkit/Slices/CartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(clearItem());
        }}
        className="mt-5 ml-[800px] text-lg bg-black text-white hover:bg-gray-900 rounded-xl w-28 "
      >
        {" "}
        ClearCart{" "}
      </button>
      <div className="mt-[110px]">
        {cartItems.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className=" flex justify-between my-6 pb-8  border-b-2 w-[800px] ml-[440px]"
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
              </div>
              <div className="text-right">
                <img
                  className="w-48  h-36  rounded-lg"
                  src={BASE_URL_IMAGE + item.card.info.imageId}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;

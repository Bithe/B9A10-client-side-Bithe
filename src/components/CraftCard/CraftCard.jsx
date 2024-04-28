import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import "../CraftCard/Button.css";

const CraftCard = ({ craft }) => {
  const { user } = useContext(AuthContext);
  console.log(craft);

  const {
    _id,
    user_email,
    item_name,
    subcategory_Name,
    photo,
    rating,
    processing_time,
    stockStatus,
    price,
    customization,
  } = craft;
  return (
    <div className="border rounded-2xl p-8 ">
      <div className="">
        <img
          src={photo}
          alt=""
          className="object-cover rounded-xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{subcategory_Name} </h2>
      </div>

      {/* STATUS */}
      <div className="flex flex-wrap justify-between py-6 items-center">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className=" text-center"
          >
            <h3 className="font-bold">Status: {stockStatus}</h3>
          </button>
        </div>
        <div className="flex space-x-2 dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <span className="font-bold">$ {price}</span>
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap justify-between py-6 items-center">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className=" text-center"
            >
              <h3 className="font-bold">Processing Time: {processing_time}</h3>
            </button>
          </div>
          <div className="flex space-x-2 dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <span className="font-bold">Rating: {rating}</span>
            </button>
          </div>
        </div>
        <h2 className="  font-semibold">{item_name}</h2>
        <h2 className="  font-semibold">
          Customization Needed: {customization}
        </h2>
      </div>

      {/*  */}
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline lg:text-2xl lg:font-bold "></h3>

        <hr className="border border-dashed " />

        <div className="flex justify-between">
          <p className="flex  items-center justify-between gap-2"></p>
        </div>
      </div>

      
        <NavLink to={`/craft-details/${_id}`}>
          <button className="glow-on-hover font-bold" type="button">
            View Details
          </button>
        </NavLink>
  
    
    </div>
  );
};

export default CraftCard;

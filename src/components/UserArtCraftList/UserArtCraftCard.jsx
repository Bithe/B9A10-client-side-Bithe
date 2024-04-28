import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import "../CraftCard/Button.css";
const UserArtCraftCard = ({ craft }) => {
  const { user } = useContext(AuthContext);
  console.log(craft);

  const {
    _id,
    item_name,
    photo,
    rating,
    processing_time,
    stockStatus,
    price,
    customization,
  } = craft;



  // DELETE FUNC
  const handleDelete = _id =>{
    console.log(_id);

  }

  return (
    <div className="border rounded-2xl p-8 ">
      <div className="">
        <img
          src={photo}
          alt=""
          className="object-cover rounded-xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
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
          <NavLink to={`/update-craft/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Update
            </button>
          </NavLink>

          <button onClick={()=>handleDelete(_id)} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserArtCraftCard;

import { useContext } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Subcategory = () => {
  const { user } = useContext(AuthContext);

  const subcategory = useLoaderData();
  

  return (
    <div>
      {subcategory.map((item) => (
        <div
          key={item._id}
          className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl py-10 dark:text-black text-black "
        >
          <div className="w-full h-64 lg:w-1/2 lg:h-auto py-8">
            <img
              className="h-full w-full object-cover"
              src={item.photo}
              alt="Winding mountain road"
            ></img>
          </div>

          <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="text-2xl font-medium uppercase text-blue-800 lg:text-4xl">
                {item.item_name}{" "}
              </h2>
              <p className="mt-4">
               {item.description}
              </p>


              <span className=" text-xl font-medium">
                Subcategory: {item.subcategory_Name}
              </span>

              <p>
                <span className="font-bold">Description: </span>
                {item.short_description}
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
              ></a>

              <hr className="border border-dashed " />
              {/*  */}

            
                  <p className="py-1">
                    Rating:{" "}
                    <span className=" font-semibold ">{item.rating}</span>{" "}
                  </p>
               
                  <p className="py-1">
                    Processing Time:{" "}
                    <span className=" font-semibold ">
                      {item.processing_time}
                    </span>
                  </p>
                  <p className="py-1">
                    Price:{" "}
                    <span className=" font-semibold ">{item.price}</span>
                  </p>



              {/* VIEW DETAILS BUTTON */}

              <div className="mt-8">
                {user ? (
                  <NavLink to={`/craft-details/${item._id}`}>
                    <button className="glow-on-hover font-bold" type="button">
                      View Details
                    </button>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <button className="glow-on-hover font-bold" type="button">
                      View Details{" "}
                    </button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subcategory;

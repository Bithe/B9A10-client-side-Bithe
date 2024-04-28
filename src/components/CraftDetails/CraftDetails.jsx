import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const craft = useLoaderData();
  console.log(craft);

  return (
    <div>
      <div className="dark:bg-gray-100 dark:text-gray-900 container mx-auto space-y-6 sm:space-y-12  ">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col justify-center col-span-12 m-8 bg-[#1313130D] rounded-2xl align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 p-8 lg:h-auto">
            <img className=" h-full" src={craft.photo} alt="" />
          </div>

          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold lg:text-5xl pb-4 ">
                {craft.item_name}
              </h1>
              <span className=" text-xl font-medium">
                Subcategory: {craft.subcategory_Name}
              </span>

              <p>
                <span className="font-bold">Description: </span>
                {craft.short_description}
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
              ></a>

              <hr className="border border-dashed " />
              {/*  */}

              <div>
                <div className="py-8">
                  <p className="py-1">
                    Customization:{" "}
                    <span className=" font-semibold ">
                      {craft.customization}
                    </span>{" "}
                  </p>
                  <p className="py-1">
                    Rating:{" "}
                    <span className=" font-semibold ">{craft.rating}</span>{" "}
                  </p>
                  <p className="py-1">
                    Stock Status:{" "}
                    <span className=" font-semibold ">{craft.stockStatus}</span>
                  </p>
                  <p className="py-1">
                    Processing Time:{" "}
                    <span className=" font-semibold ">
                      {craft.processing_time}
                    </span>
                  </p>
                  <p className="py-1">
                    Price:{" "}
                    <span className=" font-semibold ">{craft.price}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;

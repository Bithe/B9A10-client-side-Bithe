import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  // function for add craft
  const handleAddCraft = (e) => {
    e.preventDefault();

    // get the values
    // console.log("clicked");
    // console.log(user);
    console.log(user.email, user.displayName);

    // get the email a& name from firebase
    const user_email = user.email;
    const user_name = user.displayName;

    // get the values from input filed
    const item_name = e.target.item_name.value;
    const subcategory_Name = e.target.subcategory_Name.value;
    const customization = e.target.customization.value;
    const short_description = e.target.short_description.value;
    const photo = e.target.photo.value;
    const rating = e.target.rating.value;
    const processing_time = e.target.processing_time.value;
    const stockStatus = e.target.stockStatus.value; 
    const price = e.target.price.value;

    const addCraftInfo = {
      user_email,
      user_name,
      item_name,
      subcategory_Name,
      customization,
      short_description,
      photo,
      rating,
      processing_time,
      stockStatus,
      price,
    };
    console.log(addCraftInfo);


    // TO SEND SERVER 
    fetch("https://art-scape-server.vercel.app/crafts",{
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(addCraftInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data?.insertedId){
        toast("Craft Item added Successful");
      }
    })

    e.target.reset();
  };

  return (
    <div className="container mx-auto lg:px-20 py-8">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] rounded-lg">
      <Helmet>
          <title>ArtScape | Add Craft</title>
        </Helmet>
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#381f55]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#381f55]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              Add Your Craft Item{" "}
            </span>
          </p>
        </div>
        {/* form */}

        <form onSubmit={handleAddCraft}>
          <div className="flex gap-8 ">
            {/* Left side starts*/}
            <div className="flex-1">
              {/* User Email */}
              <label className="block mb-2 dark:text-white">Email</label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="email"
                placeholder="Email"
                id="user_email"
                name="user_email"

                defaultValue={user.email}
                readOnly
              />

              {/* painting name */}
              <label className="block mt-4 mb-2 dark:text-white">
                Painting Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Painting Name"
                id="item_name"
                name="item_name"
                required
              />

              {/* subcategory */}
              <label className="block mt-4 mb-2 dark:text-white">
                Choose Painting Category
              </label>

              <select
                name="subcategory_Name"
                id="subcategory_Name"
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Select category"
              >
                <option value="Landscape Painting" selected>
                  Landscape Painting
                </option>
                <option value="Portrait Drawing" selected>
                  Portrait Drawing
                </option>
                <option value="Watercolour Painting" selected>
                  Watercolour Painting
                </option>
                <option value="Oil Painting" selected>
                  Oil Painting{" "}
                </option>
                <option value="Charcoal Sketching" selected>
                  Charcoal Sketching{" "}
                </option>
                <option value="Cartoon Drawing" selected>
                  Cartoon Drawing{" "}
                </option>
              </select>

              {/* customization */}
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Customization{" "}
              </label>

              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Select category"
              >
                <option value="Yes" selected>
                  Yes{" "}
                </option>
                <option value="No" selected>
                  No{" "}
                </option>
              </select>

             

              {/* price */}
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="number"
                placeholder="Enter Price"
                id="Price"
                name="price"
                required
              />
               {/* short description */}
               <label className="block mb-2 mt-4 dark:text-white">
                Short Description
              </label>

               <textarea  className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Short description"
                id="short_description"
                name="short_description"
                required>

               </textarea>
            </div>

            {/* left side ends */}

            {/* Right side */}
            <div className="flex-1">
              {/* User Name */}
              <label className="block mb-2 dark:text-white">User Name</label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Painting Name"
                id="user_name"
                name="user_name"
                defaultValue={user.displayName}
                readOnly
              />
              {/* photo */}
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="photo"
              >
                Image URL
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Enter photo URL"
                id="photo"
                name="photo"
                required
              />

              {/* rating */}
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
                maxLength={1}
                max={1}
                min={0}
              />

              {/* processing_time */}
              <label className="block mt-4 mb-2 dark:text-white">
                Processing Time{" "}
              </label>

              <select
                name="processing_time"
                id="processing_time"
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Select category"
              >
                <option value="1-2 weeks" selected>
                  1-2 weeks{" "}
                </option>
                <option value="1-3 weeks" selected>
                  1-3 weeks{" "}
                </option>
                <option value="1-4 weeks" selected>
                  1-4 weeks{" "}
                </option>
              </select>

              {/* stockStatus */}
              <label className="block mt-4 mb-2 dark:text-white">
                stock Status{" "}
              </label>

              <select
                name="stockStatus"
                id="stockStatus"
                className="w-full p-2 border rounded-md focus:outline-[#381f55]"
                type="text"
                placeholder="Select category"
                
              >
                <option value="In Stock" selected>
                  In stock{" "}
                </option>
                <option value="Made to Order" selected>
                  Made to Order{" "}
                </option>
              </select>
            </div>
            {/*right side ends  */}
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#090979]  bg-[#020024] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraft;

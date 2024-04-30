import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import UserArtCraftCard from "./UserArtCraftCard";
import { AiOutlineArrowDown } from "react-icons/ai";

const UserArtCraftList = () => {
  const { user } = useContext(AuthContext);

  const [userCraft, setUserCraft] = useState([]);
  const [displayCraft, setDisplayCraft] = useState([]);

  useEffect(() => {
    fetch(`https://art-scape-server.vercel.app/crafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserCraft(data);
      });
  }, [user]);

  const handleFilter = (filter) => {
    console.log(filter);
    const filterCraft = userCraft.filter(
      (craft) => craft.customization === filter
    );
    setDisplayCraft(filterCraft);
    console.log(userCraft);
  };

  // const handleSort = sort =>{
  //   console.log(sort);
  // }
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12  ">
        <Helmet>
          <title>ArtScape | My Art and Craft List</title>
        </Helmet>
        {/* SORTING BUTTON */}{" "}
        <div className="flex justify-center items-center py-8 ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#23BE0A] text-white text-lg font-semibold "
            >
              Sort By <AiOutlineArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleFilter("Yes")}>
                <a>Customization: Yes</a>
              </li>
              <li onClick={() => handleFilter("No")}>
                <a>Customization: No</a>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        {/* CARDS */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {displayCraft.length > 0
            ? displayCraft.map((craft) => (
                <UserArtCraftCard
                  key={craft._id}
                  craft={craft}
                  userCraft={userCraft}
                  setUserCraft={setUserCraft}
                ></UserArtCraftCard>
              ))
            : userCraft.map((craft) => (
                <UserArtCraftCard
                  key={craft._id}
                  craft={craft}
                  userCraft={userCraft}
                  setUserCraft={setUserCraft}
                ></UserArtCraftCard>
              ))}
        </div>
      </div>
    </section>
  );
};

export default UserArtCraftList;

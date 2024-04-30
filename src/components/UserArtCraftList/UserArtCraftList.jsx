import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import UserArtCraftCard from "./UserArtCraftCard";

const UserArtCraftList = () => {
  const { user } = useContext(AuthContext);

  const [userCraft, setUserCraft] = useState([]);
  const [artCrafts, setArtCrafts] =useState()


  useEffect(() => {
    fetch(`https://art-scape-server-6e7ex3me3-bithes-projects.vercel.app/crafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserCraft(data);
      });
  }, [user]);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container p-6 mx-auto space-y-6 sm:space-y-12  ">
      <Helmet>
        <title>ArtScape | My Art and Craft List</title>
      </Helmet>

       {/* CARDS */}
       <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {userCraft.map((craft) => (
            <UserArtCraftCard key={craft._id} craft={craft}
            userCraft={userCraft} setUserCraft={setUserCraft}></UserArtCraftCard>
          ))}
        </div>
      </div>
      </section>
  );
};

export default UserArtCraftList;

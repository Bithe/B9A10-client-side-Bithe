import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const craft = useLoaderData();
  console.log(craft);
  const {
    _id,
    item_name,
    subcategory_Name,
    photo,
    rating,
    processing_time,
    stockStatus,
    price,
    customization,
    short_description,
  } = craft;

  console.log(craft);
    return (
        <div>
            
        </div>
    );
};

export default CraftDetails;
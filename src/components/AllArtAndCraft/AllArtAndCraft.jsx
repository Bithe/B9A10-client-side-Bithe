import { useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  const allCrafts = useLoaderData();

  return (
    <div className=" container mx-auto lg:px-20 py-4 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="lg:text-2xl font-bold text-blue-600 ">
          <tr className="">
            <th></th>
            <th>Painting Name</th>
            <th>Price</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allCrafts.map((craft) => (
            <tr key={craft.id} className="">
              <th>1</th>
              <td>{craft.item_name}</td>
              <td>{craft.price}</td>
              <td>{craft.stockStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArtAndCraft;

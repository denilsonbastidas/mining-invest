import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderProfile() {
  return (
    <article className="flex items-center flex-wrap w-full gap-2 justify-between shadow-xl border mt-4 rounded-lg p-4 mb-6 md:w-10/12">
      <Link to="/profile" className="flex items-center gap-1">
        <img
          className="rounded-full overflow-hidden bg-gray-200"
          src="src/public/miner.png"
          alt="user"
          width={48}
          height={48}
        />
        <h2 className="font-medium text-sm text-gray-800 md:text-lg">
          testwr@mailinator.com
        </h2>
      </Link>

      <div className="flex items-center gap-2">
        <div className="bg-primary-900 text-primary-500 text-sm font-normal rounded-full px-2 py-1">
          Active Mining XX1
        </div>
        <div
          title="support"
          className="rounded-full overflow-hidden bg-gray-800 p-1 cursor-pointer"
        >
          <FaHeadset className="w-4 h-4 text-white"></FaHeadset>
        </div>
      </div>
    </article>
  );
}
export default HeaderProfile;

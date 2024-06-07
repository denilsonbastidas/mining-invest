import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderProfile() {
  return (
    <section className="flex flex-col w-full mt-4 p-4 mb-6 shadow-xl rounded-lg border md:w-10/12">
      <article className="flex items-center flex-wrap gap-2 justify-between ">
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

        <div className="flex items-center justify-between w-full gap-2 md:justify-start md:w-auto">
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
      <div className="mt-4 flex items-center gap-2 justify-center md:justify-start ">
      <button
          type="button"
          className="button  font-medium bg-gray-800 text-white border border-gray-300"
        >
          Withdrawal
        </button>
        <button
          type="button"
          className="button bg-primary-600 font-medium text-white"
        >
          Deposit
        </button>
      </div>
    </section>
  );
}
export default HeaderProfile;

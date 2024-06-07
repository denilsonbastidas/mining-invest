import { useRef } from "react";
import { FaUsers } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

import toast from "react-hot-toast";

function HeaderData() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef: any = useRef(null);

  const handleCopyClick = () => {
    const text = textRef?.current?.textContent;
    void navigator.clipboard.writeText(text ?? "");
    toast.success("Copied Link.");
  };
  return (
    <section className="flex flex-col border  border-gray-300 p-4 text-white bg-gray-900 mx-auto mt-4 shadow-xl rounded-lg w-full md:w-1/2">
      <div className="flex items-center justify-between mb-3">
        <article className="flex flex-col items-center justify-center">
          <h4 className="font-semibold text-base">Balance</h4>
          <p className="text-gray-50 font-medium text-sm">50$</p>
        </article>

        <article className="flex flex-col items-center justify-center">
          <h4 className="font-semibold text-base">Withdrawal</h4>
          <p className="text-gray-50 font-medium text-sm">5$</p>
        </article>

        <article className="flex flex-col items-center justify-center">
          <h4 className="font-semibold text-base">New team</h4>
          <p className="text-gray-50 font-medium text-sm flex items-center gap-1">
            2 <FaUsers className="text-gray-50" size={17} />
          </p>
        </article>
      </div>
      <p className="flex-wrap font-normal text-sm text-gray-200 flex items-center gap-1 w-full">
        Share your referral link and start earning:{" "}
        <span
          ref={textRef}
          className="text-gray-200 font-medium flex items-center gap-2"
        >
          https:mininginvest/signup=43344{" "}
          <FiCopy
            onClick={handleCopyClick}
            className="text-gray-200 cursor-pointer"
            size={19}
          />{" "}
        </span>
      </p>
    </section>
  );
}
export default HeaderData;

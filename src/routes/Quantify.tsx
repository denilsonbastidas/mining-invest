import { useState } from "react";
import HeaderData from "../components/HeaderData";
import Layout from "../components/Layout";
import { MyDataTab } from "../utils/constants";
import CardQuantify from "../components/CardQuantify";

function Quantify() {
  const [currentContent, setCurrentContent] = useState<string>("To collect");

  return (
    <Layout>
      <section className="flex flex-col w-full">
        <div className="mb-4">
          <HeaderData />
        </div>
        <section className="text-lg mx-auto w-full md:w-1/2">
          <p className="text-gray-800 font-semibold text-base mb-4">
            Returns in: 20:05:40 hrs
          </p>

          <div className="flex items-center  rounded-md mb-6">
            <div className="flex w-full rounded-lg border border-gray-300">
              {MyDataTab.map(({ value }, index) => (
                <div
                  key={value}
                  className={` ${
                    currentContent === value ? "bg-gray-100" : ""
                  } ${
                    index === 0 ? "first:border-l-0" : "border-l"
                  } w-full cursor-pointer border-gray-300 p-2 px-3 text-center hover:bg-gray-100 md:p-1 md:py-2  xl:px-3
                      xl:py-2
                    `}
                  aria-hidden="true"
                  onClick={() => {
                    setCurrentContent(value);
                  }}
                >
                  <span className="px-2 text-sm font-semibold capitalize text-gray-800 md:px-1 xl:px-2">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {currentContent === "To collect" ? <CardQuantify /> : null}

          {currentContent === "Finished" ? <CardQuantify finalized /> : null}
        </section>
      </section>
    </Layout>
  );
}

export default Quantify;

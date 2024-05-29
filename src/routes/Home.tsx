import { FaBell, FaExclamationTriangle } from "react-icons/fa";
import HeaderProfile from "../components/HeaderProfile";
import MiningCard from "../components/MiningCard";
import { Machines } from "../utils/constants";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <section className="flex">
        <section className="text-lg mx-auto w-full items-center flex flex-col">
          <HeaderProfile />

          <article className="flex items-center flex-wrap text-center gap-1 mb-10">
            <FaBell className="w-4 h-4 text-gray-500 mx-auto" />
            <p className="font-normal text-sm text-gray-500 md:text-base">
              To avoid damage to investors' funds, withdrawals will reach your
              account in 1min.
            </p>
          </article>

          <article className="shadow-xl border rounded-lg flex flex-col items-center gap-3 w-full  mb-8 bg-gray-900 p-4 py-4 md:w-10/12">
            <h1 className="text-center text-3xl justify-center font-semibold flex-wrap text-white flex gap-2 md:text-4xl ">
              Welcome to Mining Invest!
              <img
                className="rounded-full"
                src="src/public/mining.png"
                alt="user"
                width={40}
                height={40}
              />
            </h1>
            <p className="text-gray-100 text-base w-full text-center md:w-1/2">
              the largest online mining platform in the industry. Our
              cutting-edge technology and easy-to-use interface provide an
              unparalleled experience for both beginner and experienced miners.
            </p>
          </article>

          <article className="flex flex-col items-center">
            <h3 className="text-gray-500 text-base font-medium md:text-lg">
              Mining Machines Available:
            </h3>

            <p className="font-normal text-sm flex flex-wrap justify-center text-center w-4/5 items-center gap-1 text-gray-500 mb-6 md:mb-4 md:w-full">
              <FaExclamationTriangle className="text-yellow-500 w-4 h-4" />
              You will be acquiring one month of our service for any machine you
              select (you can renew each month)
            </p>

            <section className="flex items-center justify-center gap-10 flex-wrap w-full mb-14">
              {Machines.map((machine, index) => (
                <MiningCard
                  machineName={machine.machineName}
                  price={machine.price}
                  generate={machine.generate}
                  key={index}
                />
              ))}
            </section>
          </article>
        </section>
      </section>
    </Layout>
  );
}

export default Home;

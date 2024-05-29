"use client";

import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaChartBar, FaHome, FaUser, FaUsers } from "react-icons/fa";

interface Props {
  mobile?: boolean;
}

function Navigation({ mobile }: Props) {
  const pathname = window.location.pathname;

  const quantifyRouter = pathname?.includes("quantify");
  const teamRouter = pathname?.includes("team");
  const profileRouter = pathname?.includes("profile");

  const homeRouter = !quantifyRouter && !teamRouter && !profileRouter;

  if (mobile ?? false) {
    return (
      <nav className="flex w-full justify-center gap-10 p-4 bg-slate-900">
        <Link to="/">
          <button
            type="button"
            className="flex flex-1 justify-center border-none"
          >
            <FaHome size={18} color={homeRouter ? "#fff" : "#98A2B3"} />
          </button>
        </Link>

        <Link to="/quantify">
          <button
            type="button"
            className="flex flex-1 justify-center border-none"
          >
            <FaChartBar size={18} color={quantifyRouter ? "#fff" : "#98A2B3"} />
          </button>
        </Link>

        <Link to="/team">
          <button
            type="button"
            className="flex flex-1 justify-center border-none"
          >
            <FaUsers size={18} color={teamRouter ? "#fff" : "#98A2B3"} />
          </button>
        </Link>

        <Link to="/profile">
          <button
            type="button"
            className="flex flex-1 justify-center border-none"
          >
            <FaUser size={18} color={profileRouter ? "#fff" : "#98A2B3"} />
          </button>
        </Link>
      </nav>
    );
  }
  return (
    <nav className="h-screen text-white">
      <Logo />
      <section className="p-6 mt-6 flex flex-col gap-6">
        <Link to="/" className="flex items-center gap-2">
          <FaHome size={18} color={homeRouter ? "#fff" : "#98A2B3"} />
          <span
            className={`text-xl font-medium hover:text-white ${
              homeRouter ? "text-white" : "text-gray-400"
            }`}
          >
            Home
          </span>
        </Link>
        <Link to="/quantify" className="flex items-center gap-2 ">
          <FaChartBar size={18} color={quantifyRouter ? "#fff" : "#98A2B3"} />
          <span
            className={`text-xl font-medium hover:text-white ${
              quantifyRouter ? "text-white" : "text-gray-400"
            }`}
          >
            Quantify
          </span>
        </Link>

        <Link to="/team" className="flex items-center gap-2 ">
          <FaUsers size={18} color={teamRouter ? "#fff" : "#98A2B3"} />
          <span
            className={`text-xl font-medium hover:text-white ${
              teamRouter ? "text-white" : "text-gray-400"
            }`}
          >
            Team
          </span>
        </Link>

        <Link to="/profile" className="flex items-center gap-2 ">
          <FaUser size={18} color={profileRouter ? "#fff" : "#98A2B3"} />
          <span
            className={`text-xl font-medium hover:text-white ${
              profileRouter ? "text-white" : "text-gray-400"
            }`}
          >
            Profile
          </span>
        </Link>
      </section>
    </nav>
  );
}

export default Navigation;

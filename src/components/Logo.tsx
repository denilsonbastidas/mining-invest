import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center p-4 gap-2">
      <img
        className="rounded-full"
        src="src/public/mining.png"
        alt=""
        width={40}
        height={40}
      />
      <h1 className="text-white font-semibold uppercase text-lg md:text-2xl">
        Mining Invest
      </h1>
    </Link>
  );
}

export default Logo;

import { HiLockClosed } from "react-icons/hi";

interface Props {
  machineName: string;
  price: number;
  generate: number;
}
function MiningCard({ machineName, price, generate }: Props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative bg-gray-900 h-48 w-80 flex items-center justify-center md:w-96">
        <h1 className="text-white text-4xl font-bold flex gap-1 items-center">
          {machineName}
          <img
            className="rounded-full"
            src="src/public/mining.png"
            alt="machine"
            width={40}
            height={40}
          />
        </h1>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm flex items-center gap-2">
          Locked Machine
          <HiLockClosed className="h-4 w-4 text-gray-500"></HiLockClosed>
        </p>
        <p className="text-gray-900 text-xl font-semibold">
          {price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p className="text-gray-500 text-end text-sm">
          {" "}
          {generate?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
          /Per Day.
        </p>
      </div>
    </div>
  );
}
export default MiningCard;

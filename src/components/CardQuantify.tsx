import { FaBitcoin } from "react-icons/fa";

interface Props {
  finalized?: boolean;
}
function CardQuantify({ finalized }: Props) {
  return (
    <section
      className={`border rounded-md flex items-center mb-3 justify-between p-3 ${
        finalized ? "bg-gray-50 border-gray-300 " : "bg-primary-900 border-primary-600"
      } `}
    >
      <article className="flex items-center gap-2">
        <p className="text-lg font-bold text-gray-700">Mined in BTC</p>
        <FaBitcoin color="#F7931A" size={17} />
      </article>

      <article className="flex flex-col items-center gap-2">
        <p className="text-sm font-normal text-primary-500">
          {" "}
          {finalized ? "You picked up" : " Generated"}: 5$
        </p>
        {finalized ? (
          <button
            type="button"
            disabled
            className="button bg-gray-100 font-medium text-white"
          >
            Collected
          </button>
        ) : (
          <button
            type="button"
            className="button bg-primary-600 font-medium text-white"
          >
            Collect
          </button>
        )}
      </article>
    </section>
  );
}
export default CardQuantify;

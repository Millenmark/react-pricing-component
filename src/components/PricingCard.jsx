/* eslint-disable react/prop-types */

const PricingCard = ({
  className,
  name,
  price,
  storage,
  allowedUsers,
  upTo,
  middle,
}) => {
  return (
    <div
      className={`${className} ${
        middle ? "text-white" : " text-neutral-grayish-blue"
      } text-sm font-bold p-5 z-30 rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] text-center flex flex-col justify-center items-stretch`}
    >
      <div>
        <h2>{name}</h2>
        <p className="p-6 text-5xl flex items-center justify-center gap-1">
          <span className="text-2xl">$</span>
          {price}
        </p>
        <div
          className={`${
            middle
              ? " divide-neutral-very-light-grayish-blue"
              : "divide-neutral-light-grayish-blue"
          } divide-y `}
        >
          <p></p>
          <p className="py-3">{`${storage} storage`}</p>
          <p className="py-3">{`${allowedUsers} Users Allowed`}</p>
          <p className="py-3">{`Send up to ${upTo} GB`}</p>
          <p></p>
        </div>
        <button
          className={`${
            middle
              ? "bg-white text-primary-gradient-end hover:outline hover:text-white hover:bg-transparent"
              : "text-white bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end hover:text-primary-gradient-end hover:outline hover:bg-gradient-to-r hover:from-transparent hover:to-transparent"
          }  w-full py-2 uppercase tracking-wider rounded-md mt-7 hover:outline-2 transition-all duration-100`}
        >
          learn more
        </button>
      </div>
    </div>
  );
};

export default PricingCard;

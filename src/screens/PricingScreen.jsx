import PricingCard from "../components/PricingCard";
import Toggle from "../components/Toggle";

import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

const PricingScreen = () => {
  const { isToggleActive } = useContext(ToggleContext);

  const x = () => {
    if (!isToggleActive) return "9";
    else return "";
  };

  return (
    <div className="container mx-auto xl:scale-[1.2] min-h-screen gap-8 flex justify-center items-center flex-col">
      <h1 className="z-10 font-bold text-3xl text-neutral-grayish-blue">
        Our Pricing
      </h1>

      <Toggle />
      <div className=" gap-5 md:gap-0 mt-5 flex flex-col md:flex-row justify-center items-center">
        <PricingCard
          name="Basic"
          price={`19${x()}.99`}
          storage="500 GB"
          allowedUsers="2"
          upTo="3"
          className=" bg-white max-w-xl h-[22rem]"
        />
        <PricingCard
          name="Professional"
          price={`24${x()}.99`}
          storage="1 TB"
          allowedUsers="5"
          upTo="10"
          middle
          className="  bg-gradient-to-br max-w-xl h-[22rem] from-primary-gradient-start to-primary-gradient-end md:w-72 md:max-w-xl md:h-[25rem]"
        />
        <PricingCard
          name="Master"
          price={`39${x()}.99`}
          storage="2 TB"
          allowedUsers="10"
          upTo="20"
          className=" bg-white max-w-xl h-[22rem]"
        />
      </div>
    </div>
  );
};

export default PricingScreen;

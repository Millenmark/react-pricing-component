import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

const Toggle = () => {
  const { isToggleActive, handleToggleActive } = useContext(ToggleContext);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
      <div className="flex justify-center items-center">
        <span className=" text-neutral-light-grayish-blue text-sm font-bold">
          Annually
        </span>
        <div
          className={`w-12 h-7 flex items-center bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end rounded-full mx-3 px-1 ${
            isToggleActive ? "bg-cyan-700" : ""
          }`}
          onClick={handleToggleActive}
        >
          {/* Switch */}
          <div
            className={`bg-white w-5 h-5 transition-all duration-300 rounded-full shadow-md transform ${
              isToggleActive ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
        <span className=" text-neutral-light-grayish-blue text-sm font-bold">
          Monthly
        </span>
      </div>
    </div>
  );
};

export default Toggle;

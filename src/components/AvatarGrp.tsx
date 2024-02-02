import React from "react";

interface AvatarGrpProps {
  sizeClass?: string;
  marginClass?: string;
  number?: string;
}

const AvatarGrp: React.FC<AvatarGrpProps> = ({
  sizeClass = " h-8 w-8 md:h-10 md:w-10 ",
  marginClass = " -mr-6 ",
  number = "44",
}) => {
  return (
    <div className="w-full">
      <div className="flex">
        <img
          className={`rounded-full ${sizeClass} ${marginClass}`}
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
        />
        <img
          className={`rounded-full ${sizeClass} ${marginClass}`}
          src="https://randomuser.me/api/portraits/women/31.jpg"
          alt=""
        />
        <img
          className={`rounded-full ${sizeClass} ${marginClass}`}
          src="https://randomuser.me/api/portraits/men/33.jpg"
          alt=""
        />
        <img
          className={`rounded-full ${sizeClass} ${marginClass}`}
          src="https://randomuser.me/api/portraits/women/32.jpg"
          alt=""
        />
        <img
          className={`rounded-full ${sizeClass} ${marginClass}`}
          src="https://randomuser.me/api/portraits/men/44.jpg"
          alt=""
        />
        <img
          className={`rounded-full ${sizeClass} ${marginClass}`}
          src="https://randomuser.me/api/portraits/women/42.jpg"
          alt=""
        />
        <span className={sizeClass + "flex items-center justify-center bg-black text-sm text-white border-2 border-black rounded-full"}>
          +{number}
        </span>
      </div>
    </div>
  );
};

export default AvatarGrp;

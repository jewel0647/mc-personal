import React from "react";

export type TechStackProps = {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: React.ReactNode;
  badges: string[];
  versions: string[];
};

const TechStack: React.FC<TechStackProps> = ({
  name,
  icon,
  color,
  description,
  badges,
  versions,
}) => {
  return (
    <div className="flex gap-5">
      {/* icon */}
      <div
        className={`inline-flex items-center justify-center min-w-[56px] w-14 h-14 rounded overflow-hidden ${color}`}
      >
        {icon}
      </div>

      {/* content */}
      <div className="flex flex-col gap-3">
        {/* header */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-medium">{name}</h1>
          {versions.map((version, index) => (
            <div
              key={index}
              className="inline-flex items-center h-6 justify-center uppercase bg-teal-500/10 text-teal-500 font-bold text-sm px-2"
            >
              {version}
            </div>
          ))}
        </div>

        {/* p */}
        <p className="text-gray-500 text-lg">{description}</p>

        {/* badges */}
        <div className="flex items-center gap-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

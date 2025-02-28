import React from "react";

type WORKTYPE = "FULL" | "PART";

export type ExperienceProps = {
  role: string;
  company: string;
  color: string;
  type: WORKTYPE;
  isRemote: boolean;
  from: string;
  to: string;
  duration: string;
  detail: string[];
};

const Experience: React.FC<ExperienceProps> = ({
  role,
  company,
  color,
  type,
  isRemote,
  from,
  to,
  duration,
  detail,
}) => {
  return (
    <div className="flex gap-5">
      {/* icon */}
      <div
        className={`inline-flex items-center justify-center min-w-[56px] w-14 h-14 rounded overflow-hidden ${color}`}
      >
        <span className="text-2xl text-white font-bold">
          {company.charAt(0).toString().toUpperCase()}
        </span>
      </div>

      {/* content */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{role}</h1>
        <div className="flex items-center gap-2 font-medium text-gray-800">
          <span className="text-md uppercase">{company}</span>
          <div className="inline-flex w-2 h-2 rounded-full bg-gray-500/50" />
          <span className="text-md">
            {type === "FULL" ? "Full Time" : "Part Time"}
          </span>
          {isRemote && (
            <>
              <div className="inline-flex w-2 h-2 rounded-full bg-gray-500/50" />
              <span className="text-md">Remote</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            {from} - {to}
          </span>
          <div className="inline-flex w-2 h-2 rounded-full bg-gray-500/50" />
          <span>{duration}</span>
        </div>
        <div className="flex flex-col space-y-1 text-gray-500 mt-2">
          {detail.map((exp, index) => (
            <p key={index}>* {exp}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

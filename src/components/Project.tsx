import React from "react";

export type ProjectProps = {
  title: string;
  description: string;
  challenge: string;
  stacks: string[];
  integrations: string[];
  image: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  challenge,
  stacks,
  integrations,
  image,
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-2xl font-semibold text-gray-800 italic">{title}</h3>

      <div className="grid grid-cols-2 gap-5">
        {/* left - description, challenge, stacks, integrations */}
        <div className="flex flex-col">
          <div className="flex flex-col space-y-5 divide-y">
            {/* description */}
            <p className="text-gray-500 text-lg">{description}</p>

            {/* challenge */}
            <p className="text-md italic text-gray-500 pt-5">{challenge}</p>
          </div>

          {/* stacks */}
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-lg text-teal-500 uppercase font-medium">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-1">
              {stacks.map((stack, index) => (
                <div
                  key={index}
                  className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2"
                >
                  {stack}
                </div>
              ))}
            </div>
          </div>

          {/* integrations */}
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-lg text-teal-500 uppercase font-medium">
              Integrations
            </h3>

            <div className="flex flex-wrap gap-1">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right - image */}
        <div className="">
          <img
            src={`/images/${image}.png`} // Adjust path if needed, relative to the public folder
            width={600}
            height={600}
            alt={`project-${image}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

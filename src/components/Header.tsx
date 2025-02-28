import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  name: string;
  role: string;
  location: string;
  phone?: string;
  email: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  role,
  location,
  phone,
  email,
}) => {
  return (
    <div className="w-full px-20 pt-10 pb-10 flex justify-between border-b border-black/10">
      {/* left - name, role, location, remote */}
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold">{name}</h1>
        <span className="text-lg text-gray-500 mt-3">{role}</span>
        <div className="flex items-center space-x-3 mt-2">
          {/* remote chip */}
          <div className="inline-flex items-center justify-center uppercase bg-teal-500/10 text-teal-500 font-bold text-sm px-2">
            Remote
          </div>

          {/* location */}
          <div className="flex items-center space-x-1">
            <MapPinIcon className="w-5 h-5 text-teal-500" />
            <span className="text-teal-500 font-bold">{location}</span>
          </div>
        </div>
      </div>

      {/* right - phone, email, social */}
      <div className="flex flex-col justify-end space-y-3 text-gray-500">
        {/* phone */}
        {phone && 
        <div className="flex items-center space-x-2">
          <PhoneIcon className="w-5 h-5" />
          <span>{phone}</span>
        </div>
}

        {/* mail */}
        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="w-5 h-5" />
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

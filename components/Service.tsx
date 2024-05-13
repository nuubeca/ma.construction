import { service } from "@/app/constants";
import React from "react";

export default function Service() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6"
    >
      {service.map((item, index) => (
        <li key={index} className="bg-gray-200">
          <div className="flex flex-1 flex-col">
            <img
              className="mx-auto h-full w-full"
              src={item.cardImage}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900 pl-3">
              {item.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between p-3">
              <dd className="text-sm text-gray-500">{item.cardDescription}</dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}

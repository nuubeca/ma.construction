import React from "react";

export default function VracCaculationBanner() {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover bg-no-repeat h-96 flex items-center justify-center"
      style={{ backgroundImage: "url('images/vrac.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-white text-4xl font-bold z-20">Centered Text</div>
    </div>
  );
}

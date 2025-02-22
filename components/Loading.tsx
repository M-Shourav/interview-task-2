import React from "react";

const Loading = () => {
  return (
    <div
      className="w-full min-h-screen absolute top-0 left-0 bg-white
    text-black z-50 flex flex-col gap-2 items-center justify-center"
    >
      <div
        className="w-8 h-8 rounded-full border-[4px] border-r-green-500 border-l-blue-500
       border-t-yellow-500 border-b-black animate-spin"
      />
      <h3 className="text-xl font-semibold text-blue-600">Loading...</h3>
    </div>
  );
};

export default Loading;

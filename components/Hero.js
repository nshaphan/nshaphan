import React from "react";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
        <div class="mt-20 lg:mt-20 lg:ml-16 text-left">
          <div class="text-6xl font-semibold text-pink-900 leading-none">
            Software Engineer, Tech Enthusiast,
          </div>
          <div class="mt-6 text-xl font-semibold text-true-gray-500 antialiased">
            I am a software engineer with a passion for building software that
            is both beautiful and functional.
          </div>
        </div>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40">
        <div className="w-3/4 my-4">
          <img src={userData.avatarUrl} alt="avatar" width={500} height={500}/>
        </div>
      </div>
    </div>
  );
}

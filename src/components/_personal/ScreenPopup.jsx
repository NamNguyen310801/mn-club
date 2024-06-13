import React from "react";

export default function ScreenPopup() {
  return (
    <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full z-[99999] text-[#e3e3e3] text-center bg-[#2e215a]">
      <div className="flex flex-col items-center justify-center p-[5%]">
        <i className="w-[50vw] h-[30vw] m-auto bg-center bg-norepeat bg-contain" />
        <span className="mt-3 text-lg">
          Please rotate your screen for best experience
        </span>
      </div>
    </div>
  );
}

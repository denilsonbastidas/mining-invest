import React from "react";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="flex">
        <div className="z-30 hidden w-full bg-gray-900 md:block md:border-r md:pl-2 md:w-1/4">
          <Navigation />
        </div>
        <div id="content-wrapper" className="flex w-full overflow-y-auto">
          {children}
        </div>
      </div>
      {/* Mobile */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 w-full border-t text-black md:z-0 md:hidden"
        id="mobile-footer"
      >
        <Navigation mobile />
      </div>
    </>
  );
}

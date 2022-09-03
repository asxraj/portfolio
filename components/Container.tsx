import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] xl:max-w-[65vw] w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;

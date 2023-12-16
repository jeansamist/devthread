"use client";
import { FunctionComponent, useEffect, useState } from "react";

export const Circles: FunctionComponent = () => {
  const [scrolled, setscrolled] = useState(0);
  useEffect(() => {
    const bodyHeight = parseFloat(
      getComputedStyle(document.body).height.split("px")[0]
    );
    const scrollableValue = bodyHeight - innerHeight;
    window.addEventListener("scroll", (e) => {
      setscrolled((scrollY * 100) / scrollableValue);
    });
  }, []);

  return (
    <>
      <div
        className="fixed bottom-0 -translate-x-1/2 translate-y-1/2 z-0"
        style={{
          bottom: scrolled + "%",
          transition: "bottom 0.2s linear",
        }}
      >
        <div className="shadow-inner border rounded-full w-80 h-80 p-8">
          <div className="h-full w-full p-8   shadow-inner border rounded-full">
            <div className="h-full w-full  shadow-inner border rounded-full p-8">
              <div className="h-full w-full   shadow-inner border rounded-full p-8">
                <div className="h-full w-full   shadow-inner border rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed top-0 right-0 translate-x-1/2 z-0 -translate-y-1/2"
        style={{
          top: scrolled + "%",
          transition: "top 0.1s linear",
        }}
      >
        <div className="  shadow-md border rounded-full w-80 h-80 p-8">
          <div className="h-full w-full p-8   shadow-md border rounded-full">
            <div className="h-full w-full   shadow-md border rounded-full p-8">
              <div className="h-full w-full   shadow-md border rounded-full p-8">
                <div className="h-full w-full   shadow-md border rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

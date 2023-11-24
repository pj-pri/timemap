"use client";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import View from "@/components/view/view";
import { useEffect, useState } from "react";
import { DocView } from "@/components/doc-view";

export default function Home() {
  const [width, setWidth] = useState<number>(500);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickHandler = (e: any) => {
    console.log("click : ", e);
    setIsOpen((t) => !t);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="w-full h-full p-10px">
        <div className="w-full h-full flex justify-center items-center border border-solid border-black">
          {/* <div className="bg-white w-30% min-w-[100px] h-full shrink-0"></div> */}
          <div
            style={{ width: `${isOpen ? "calc(100% - 500px)" : "100%"}` }}
            className={` h-full bg-red-300`}
          >
            <View clickHandler={clickHandler} />
          </div>
          {isOpen && (
            <div className="bg-green-300 shrink-0 h-full w-[500px] p-[30px]">
              <DocView />
            </div>
          )}
        </div>
      </main>
    </ThemeProvider>
  );
}

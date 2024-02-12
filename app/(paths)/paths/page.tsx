"use client";
import AgendaUI from "@/components/ui/agenda";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftCircleIcon";
import { Montserrat } from "next/font/google";
import ListBox from "@/components/ui/listbox";
import { useState } from "react";

// const aijourneys: string[] = [
//     "Developer Journey",
//     "Architects Journey",
//     "Consultants Journey",
//     "Consultants Journey",
//     "Consultants Journey"
//   ];

interface listdataPropos {
  key: string;
  value: string;
}
let aijourneys: listdataPropos[] = [
  { key: "dev", value: "Developer" },
  { key: "arch", value: "Architect" },
  { key: "consult", value: "Consultant" },
  { key: "admin", value: "Admin" },
  { key: "pm", value: "Product Manager" },
];

const font = Montserrat({ weight: "600", subsets: ["latin"] });
const PathsPage = () => {
  const [selectedValue, setSelected] = useState<string>("");
  return (
    <div>
      <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b]  sticky top-0 z-50 h-20 flex justify-start items-center">
        <div className="max-w-screen-xl">
          <nav className="p-4 bg-transparent flex items-center justify-between flex-wrap">
            <Link href="/" className="flex items-center">
              <div className="relative mr-4 flex items-center justify-between ml-2">
                <ArrowLeftIcon className="h-12 w-12" />
              </div>
              <h1
                className={cn("text-2xl font-bold text-black", font.className)}
              >
                Back to Home/Agenda Page
              </h1>
            </Link>
          </nav>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-2 flex pt-2 items-center">
          <div className="text-2xl pr-4 w-72">Select a Path: </div>
          <ListBox
            data={aijourneys}
            selectedValue={selectedValue}
            setSelected={setSelected}
          ></ListBox>
        </div>
        <AgendaUI hideSearch={true} searchValue="" hideSticky={true} />
      </div>
    </div>
  );
};

export default PathsPage;

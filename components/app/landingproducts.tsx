import React from "react";

export default function Products() {
  return (
    <div className=" grid h-[80vh] w-[100%] grid-cols-4 gap-2 overflow-hidden bg-black p-2">
      <div className=" grid-row-3 col-span-2 grid h-[100%] w-[100%] grid-cols-2 bg-slate-300 p-2">
        <div className=" h-[100%] w-[100%] bg-green-400">Child 1 </div>
        <div className="  h-[100%] w-[100%] bg-red-400">Child 2</div>
        <div className="col-span-2 h-[100%] w-[100%] bg-yellow-300">
          Child 3
        </div>
        <div className=" col-span-2 h-[100%] w-[100%] bg-yellow-100">
          {" "}
          Child 4
        </div>
      </div>

      <div className="  h-[100%] w-[100%] bg-green-400"> One 1 </div>
      <div className=" row-span-2 h-[100%] w-[100%] bg-red-400"> One 1 </div>
      <div className="h-[100%] w-[100%] bg-yellow-300"> One 1 </div>
      <div className="col-span-2 h-[100%] w-[100%] bg-blue-300"> One 1 </div>
    </div>
  );
}

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg"

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <div className="relative flex w-full">
        <input 
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Research anything..." 
          className="w-full pl-12 pr-[4.5rem] py-3 bg-neutral-100 border-black outline-none rounded-full placeholder-neutral-500 text-lg"
        />
        <div className="absolute flex items-center top-0 left-4 h-full text-black text-xl pointer-events-none">
          <AiOutlineSearch className="text-black" />
        </div>
        {value && <div className="absolute flex items-center top-0 right-0 p-2 h-full text-black text-3xl">
          <button className="bg-blue-600 hover:bg-blue-700 rounded-full h-full px-4">
            <CgArrowRight className="text-white" />
          </button>
        </div>}
      </div>
      {/*<button disabled={!value} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 text-white text-sm px-6 py-2 rounded-full focus:outline-none disabled:opacity-50">
        Get Facts
      </button>*/}
    </div>
  )
}

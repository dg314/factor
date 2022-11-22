import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <div className="relative flex w-full">
        <input 
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Research anything..." 
          className="w-full pl-12 pr-6 py-3 bg-neutral-100 border-black outline-none rounded-full placeholder-neutral-500 text-lg"
        />
        <div className="absolute flex items-center top-0 left-4 w-20 h-full text-black text-xl">
          <AiOutlineSearch className="text-black" />
        </div>
      </div>
      <button disabled={!value} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 text-white text-sm px-6 py-2 rounded-full focus:outline-none disabled:opacity-50">
        Get Facts
      </button>
    </div>
  )
}

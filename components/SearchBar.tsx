import Link from "next/link";
import { useRouter } from 'next/router'
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg"
import { SearchQuery } from "../types/search";

type SearchBarProps = {
  initialText?: string;
  big: boolean;
}

export default function SearchBar(props: SearchBarProps) {
  const { initialText, big } = props;

  const [text, setText] = useState<string>(initialText ?? "");

  const router = useRouter();

  const searchQuery: SearchQuery = {
    text
  };

  const resultsPath = {
    pathname: "/results",
    query: searchQuery
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(resultsPath);
    }
  }

  const showArrow = text && text !== initialText;

  return (
    <div className="relative flex w-full max-w-2xl">
      <input 
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Research anything..." 
        size={30}
        className={`w-full bg-neutral-100 border-black outline-none rounded-full placeholder-neutral-500 text-black ${big ? `pl-12 ${showArrow ? "pr-[4.5rem]" : "pr-6"} py-3 text-lg` : `pl-9 ${showArrow ? "pr-[4rem]" : "pr-5"} py-2 text-base`}`}
      />
      <div className={`absolute flex items-center top-0 h-full text-black pointer-events-none ${big ? "left-4 text-xl" : "left-3 text-lg"}`}>
        <AiOutlineSearch className="text-black" />
      </div>
      {showArrow && <div className={`absolute flex items-center top-0 right-0 h-full text-black ${big ? "p-2 text-3xl" : "p-[0.35rem] text-2xl"}`}>
        <Link
          href={resultsPath}
          className={`flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 rounded-full h-full ${big ? "px-4" : "px-3"}`}
        >
          <CgArrowRight className="text-white" />
        </Link>
      </div>}
    </div>
  )
}

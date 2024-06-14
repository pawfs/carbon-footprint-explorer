"use client";

import { Search, X } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex flex-row gap-4 rounded-lg border-2 border-white/10 py-4">
      <div className="flex flex-row rounded-lg border-2 border-black p-4">
        <input
          className="h-full w-full focus:outline-none" type="text" onChange={() => { }}
        />
        <button onClick={() => { }}>
          <span>
            <X />
          </span>
        </button>
      </div>
      <button
        className="flex items-center justify-center gap-2 rounded-lg  p-4" onClick={() => { }}
      >
        <span>
          <Search />
        </span>
      </button>

    </div>
  )
}
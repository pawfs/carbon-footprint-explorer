"use client";

import { on } from "events";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchInput() {

  // useState hook to manage the query state
  const [query, setQuery] = useState("")


  const executeSearchQuery = async () => {
    // Sending the query as the request body to the /api/search endpoint
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log(data.results);
  }

  return (
    <div className="flex flex-row gap-4 rounded-lg border-2 border-white/10 py-4">
      <div className="flex flex-row rounded-lg border-2 border-black p-4">
        <input
          className="h-full w-full focus:outline-none" type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setQuery("")}>
          <span>
            <X />
          </span>
        </button>
      </div>
      <button
        className="flex items-center justify-center gap-2 rounded-lg  p-4" onClick={executeSearchQuery}
      >
        <span>
          <Search />
        </span>
      </button>

    </div>
  )
}
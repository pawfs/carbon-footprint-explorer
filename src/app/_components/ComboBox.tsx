"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { EmissionFactorSearchResult } from "../types";

export default function ComboBox() {
  const [searchResults, setSearchResults] = useState<EmissionFactorSearchResult | null>(null);
  return (
    <>
      <SearchInput onSearch={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </>
  );
}
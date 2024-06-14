"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function ComboBox() {

    return (
        <>
            <SearchInput />
            <SearchResults />
        </>
    )
}
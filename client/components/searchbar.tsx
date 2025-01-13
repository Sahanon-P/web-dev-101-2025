import React from "react";
import { Input } from "./ui/input";

export default function SearchBar() {
return (
    <div className="w-[300px]">
    <Input placeholder="Search" className="border-r-2 rounded bg-zinc-600 flex-grow" type="search" />
    </div>
);
}

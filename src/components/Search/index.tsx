"use client";

import { useRef, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && searchInput.current) {
      const keyword = searchInput.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-white border border-[#2d2d2d] rounded-lg bg-[#2d2d2d] focus:bg-[#2d2d2d] focus:outline-none"
        style={{
          WebkitTextFillColor: "#ffffff",
          WebkitBoxShadow: "0 0 0px 1000px #2d2d2d inset",
          transition: "background-color 5000s ease-in-out 0s",
        }}
        placeholder="Search..."
        ref={searchInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

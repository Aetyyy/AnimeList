import SearchInput from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

type NavItem = {
  id: number;
  name: string;
  link: string;
};

export default function Navbar() {
  const navComponents: NavItem[] = [
    { id: 1, name: "New Anime", link: "/release" },
    { id: 2, name: "List Anime", link: "/list" },
    { id: 3, name: "Schedule", link: "/schedule" },
  ];

  return (
    <header className="bg-[#181818] border-gray-200 fixed w-full top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/boren.webp"
            className="h-8 w-8 rounded-full z-0"
            width={64}
            height={64}
            alt="Boren Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DakaBoren
          </span>
        </Link>
        <div className="flex md:order-2">
          <button className="md:hidden text-gray-400 hover:bg-[#252525] focus:outline-none rounded-lg text-sm p-2.5 me-1">
            <IoSearch className="w-5 h-5" />
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch className="w-5 h-5 text-gray-500" />
            </div>
            <SearchInput />
          </div>
          <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#252525] focus:outline-none">
            <RxHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          {/* <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Search..."
            />
          </div> */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#181818] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navComponents.map((i) => (
              <li key={i.id}>
                <Link
                  href={i.link}
                  className="block py-2 px-3 text-[#d4d4d4] hover:text-white rounded md:bg-transparent md:p-0"
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

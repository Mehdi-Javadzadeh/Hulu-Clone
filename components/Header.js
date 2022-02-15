import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

// rfce to creact the function
function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 
    justify-between items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BadgeCheckIcon} />
        <HeaderItem title="VERIFIED" Icon={CollectionIcon} />
        <HeaderItem title="COLLECTIONS" Icon={LightningBoltIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* <h1>This is the Header</h1> */}
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

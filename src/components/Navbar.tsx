import React from "react";

interface nav {
  label: string;
  route: string;
}

const navItem: nav[] = [
  { label: "Home", route: "" },
  { label: "Contact", route: "" },
  { label: "About", route: "" },
  { label: "Signup", route: "" },
];

const Navbar = () => {
  return (
    <div className="w-full pt-6 pb-3 lg:pb-4 lg:pt-8 border-b border-b-black/15">
      <div className="flex justify-between items-center">
        <h1 className="text-lg lg:text-2xl font-bold">Exclusive</h1>

        <ul className="lg:flex hidden items-center gap-5 lg:gap-7">
          {navItem.map((nav, index) => (
            <li>{nav.label}</li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5 bg-[#f5f5f5] w-full max-w-[15rem]">
            <input
              type="search"
              placeholder="What are you looking for ? "
              className="outline-none bg-transparent w-full text-sm px-3 py-2"
            />
          </div>
          {/* like and cart icons */}
          <div className="flex items-center gap-6">
            <h2>Li</h2>
            <h2>ca</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-[#1976d2] text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4">
            <div>
              <h1>BOOKING YOUR DAY</h1>
            </div>
            <div>
              <ul className=" lg:flex hidden items-center gap-4">
                <li>
                  {" "}
                  <Link href="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/">News</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-blue-400 px-3 py-[5px] rounded-md">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

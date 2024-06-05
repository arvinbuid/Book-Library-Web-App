import {Bars3BottomLeftIcon} from "@heroicons/react/16/solid";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Hero from "../Hero";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => setToggleMenu(!toggleMenu);

  useEffect(() => {
    setToggleMenu(!toggleMenu);
  }, []);

  return (
    <>
      <nav className='px-2 py-2  flex justify-center'>
        <div className='w-[1000px] px-2 py-2 flex justify-between'>
          <Link to={"/"}>
            <p className='text-3xl sm:text-4xl font-bold cursor-pointer text-primary'>
              Book <span className='text-blue-800'>Library</span>
            </p>
          </Link>
          <div className='text-2xl font-bold flex gap-4 items-center '>
            <div className='xs:hidden sm:flex gap-4 cursor-pointer'>
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <Link to={"/about"}>
                <p>About</p>
              </Link>
            </div>
            <div className='xs:flex sm:hidden'>
              <button onClick={handleMenuClick}>
                <Bars3BottomLeftIcon width={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {!toggleMenu ? (
        <div className='w-full h-auto py-4 bg-black absolute z-[100] xs:block sm:hidden'>
          <ul className='flex flex-col gap-1 text-white text-4xl  w-full text-center'>
            <Link to={"/"}>
              {" "}
              <li className='cursor-pointer hover:bg-primary px-4 py-4'>Home</li>
            </Link>
            <Link to={"/about"}>
              <li className='cursor-pointer hover:bg-primary px-4 py-4'>About</li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div>
        <Hero />
      </div>
    </>
  );
}

export default Navbar;

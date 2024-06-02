function Nav() {
  return (
    <nav className='px-2 py-2  flex justify-center'>
      <div className='w-[1000px] px-2 py-2 flex justify-between'>
        <p className='text-3xl sm:text-4xl font-bold cursor-pointer text-primary'>
          Book <span className='text-blue-800'>Library</span>
        </p>
        <div className='text-2xl font-bold flex gap-4 items-center '>
          <div className='xs:hidden sm:flex gap-4 cursor-pointer'>
            <p>Home</p>
            <p>Books</p>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

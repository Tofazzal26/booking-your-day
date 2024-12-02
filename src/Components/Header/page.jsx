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
                <li>Home</li>
                <li>News</li>
                <li>About</li>
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

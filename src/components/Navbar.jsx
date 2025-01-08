function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex text-lg items-center space-x-8 font-semibold">
        <a href="/" className="text-[#262626] hover:text-[#414d43]">
          Home
        </a>
        <div className="relative group">
          <a
            href="#"
            className="text-[#262626] hover:text-[#414d43] flex items-center"
          >
            Our Services
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
        <a href="#" className="text-[#262626] hover:text-[#414d43]">
          Our Cases
        </a>
        <a href="#" className="text-[#262626] hover:text-[#414d43]">
          About Us
        </a>
      </div>
      <div className="flex items-center space-x-4 text-lg">
        <button className="px-6 py-2 border border-[#262626] rounded-full hover:bg-[#e8e5e0]">
          Book a Call
        </button>
        <button className="px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-[#414d43]">
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

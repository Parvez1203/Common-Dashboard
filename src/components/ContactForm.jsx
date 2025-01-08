import React from "react";

const ContactForm = () => {
  return (
    <div className="container bg-[#414d43] text-[#e8e5e0] mx-auto px-6 py-20 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between h-full">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            {/* "Get in touch" section */}
            <div className="mb-8">
              <p className="text-xl text-[#ACA296]">Get in touch</p>
            </div>

            {/* Address and Contact Section */}
            <div className="mt-auto space-y-8">
              <div>
                <h3 className="text-lg mb-2 text-[#ACA296]">Address</h3>
                <p className="text-xl">
                  123 Elm Street,
                  <br />
                  Charlotte, NC 28202,
                  <br />
                  USA
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#ACA296]">Contact</h3>
                <p className="text-xl">email@domain.com</p>
                <p className="text-xl">T: +1(919) 555-1234</p>
              </div>
            </div>
          </div>

          {/* Right Column: Let's talk about */}
          <div className="lg:w-2/3">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12">
                Let's talk about{" "}
                <span className="text-[#ACA296]">what you want to achieve</span>
              </h2>
              <form>
                <div className="mb-6 text-[#ACA296]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-lg w-full bg-transparent border-b border-[#e8e5e0] py-2 placeholder-[#ACA296] focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="text-lg w-full bg-transparent border-b border-[#e8e5e0] py-2 placeholder-[#ACA296] focus:outline-none"
                  />
                </div>
                <div className="mb-12">
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="text-lg w-full bg-transparent border-b border-[#e8e5e0] py-2 placeholder-[#ACA296] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-lg w-full bg-[#e8e5e0] text-black py-4 rounded-full font-semibold hover:bg-[#ACA296] transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black text-white pt-24 mt-36">
      <div className="flex items-center justify-center">
        <div className=" my-8 flex flex-col gap-6 text-sm md:w-full md:flex-row md:justify-evenly md:text-md lg:text-xl">
          <div className="">
            <h5 className="font-bold text-xl my-5 md:my-2">Orion Gallery</h5>
            <p className="text-gray-400 mb-5">
              Art Project. Gallery. Publishing
            </p>
            <p>
              24 Brindle Street London, W1A 5TE
              <br />
              United Kingdom
            </p>
          </div>
          <div className="self-start">
            <h5 className="font-bold text-lg py-2">Links</h5>
            <ul className="md:flex md:flex-col md:gap-2">
              <a href="#home" className="cursor-pointer">
                <li>Home</li>
              </a>
              <a href="#meet-our-artists" className="cursor-pointer">
                <li>Meet Our Artists</li>
              </a>
              <a href="#events" className="cursor-pointer">
                <li>Events</li>
              </a>
              <a href="#about" className="cursor-pointer">
                <li>About Us</li>
              </a>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg py-2">Contact</h5>
            <p>OrionManagement@OrionGallery.com</p>
            <p>+ (555) 1326 957124</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 flex flex-col  gap-4 items-center justify-between text-xs md:flex-row md:mx-4 md:text-md ">
        <p className="py-4">{year} Allright reserved</p>
        <div className="text-gray-400">
          <p>This website is for skill demonstration only</p>
          <p>I do not own any of the content on this page.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

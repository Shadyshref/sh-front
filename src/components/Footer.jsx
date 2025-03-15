import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [contact, setContact] = useState([
    { icon: "images/icon-phone.svg", text: "+1-543-123-4567" },
    { icon: "images/icon-email.svg", text: "example@fylo.com" }
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Jobs",
    "Contact Us",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  return (
    <section className="bg-[#0c1524] mt-[300px] w-full h-auto py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-8 lg:px-12">
        <div className="text-white">
          <a href="">
            <img 
              className="mb-6 w-[175px] h-[66px] object-contain sm:w-[150px] sm:h-auto max-w-full" 
              src="images/logo.svg" 
              alt="Logo" 
            />
          </a>
          <div className="mt-8 flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex items-start gap-3 max-w-full">
              <img className="w-[18px] h-[18px] object-contain" src="images/icon-location.svg" alt="" />
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              {contact.map((item) => (
                <div className="text-white flex items-center gap-4 mb-4 last:mb-0" key={item.text}>
                  <img className="w-[18px] h-[18px] object-contain" src={item.icon} alt="" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="w-full md:w-auto">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-primary transition-colors duration-200 text-base" href="">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 justify-center md:justify-start mt-6 sm:mt-0">
              <a className="text-white hover:text-primary" href=""><FaFacebook /></a>
              <a className="text-white hover:text-primary" href=""><FaTwitter /></a>
              <a className="text-white hover:text-primary" href=""><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

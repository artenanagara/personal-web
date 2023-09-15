import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const sociallinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/artenanagara",
      image: "https://cdn.simpleicons.org/instagram/white",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/artena-nagara/",
      image: "https://cdn.simpleicons.org/linkedin/white",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/artenanagara",
      image: "https://cdn.simpleicons.org/dribbble/white",
    },
    {
      name: "Github",
      url: "https://www.github.com/artenanagara",
      image: "https://cdn.simpleicons.org/github/white",
    },
  ];

  return (
    <div className="container mx-auto py-6 flex flex-row justify-center text-center md:text-start md:justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-primary">Artena.</h1>
        <p className="text-white text-sm font-medium">
          Made with Love <span className="text-red-500">&hearts;</span>
        </p>
        <p className="text-white text-sm font-medium">
          © 2021 Artena. All rights reserved.
        </p>
      </div>
      <div className="hidden md:flex flex-col justify justify-between">
        <div className="flex flex-row gap-9 text-white text-base font-medium">
          {navlinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className="hover:text-primary hover:font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="show md:flex flex-row gap-8 justify-end">
          {sociallinks.map((link) => (
            <a href={link.url} className="hover:-translate-y-2 duration-150 ">
              <div className="w-8 h-8">
                <img src={link.image} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

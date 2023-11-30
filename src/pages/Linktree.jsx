import React from "react";
import { Link } from "react-router-dom";


const links = [
  {
    name: "Personal Website",
    url: "https://artenanagara.my.id",
  },
  {
    name: "Case Study",
    url: "https://medium.com/@artenanagara",
  },
  {
    name: "BuyCar Landing Page Figma",
    url: "https://www.figma.com/community/file/1220034787814175929",
  },
]

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/artenanagara",
    image: "https://cdn.simpleicons.org/instagram/black",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/artena-nagara/",
    image: "https://cdn.simpleicons.org/linkedin/black",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/artenanagara",
    image: "https://cdn.simpleicons.org/dribbble/black",
  },
  {
    name: "Github",
    url: "https://www.github.com/artenanagara",
    image: "https://cdn.simpleicons.org/github/black",
  },
];

function Linktree() {
    return (
      <>
        <div className="bg-black max-w-sm w-screen min-h-screen mx-auto shadow-xl shadow-neutral-900 py-4 px-5 flex flex-col justify-center items-strech text-center gap-8">

          <div className="flex flex-col gap-4">
            <div className="w-[128px] h-[128px] rounded-full bg-white self-center"></div>
              <div className="flex flex-col gap-1 text-white">
                <p className="text-2xl font-bold">Artena Nagara</p>
                <p className="text-base font-thin">UI Engineer | 🪐 Semarang</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {
              links.map(link =>(
              <Link to={link.url} className="bg-primary text-black px-4 py-4 rounded-md font-medium w-100% hover:bg-yellow-700 hover:text-white duration-100 hover:-translate-y-2">
              {link.name}
              </Link>
                )
              )
            }
          </div>
          
          <div className="flex flex-col gap-1">
            <h1 class="font-semibold text-white text-lg text-center">Any interesting ideas to work on?</h1>
            <p class="font-normal text-slate-200 text-center text-xs">Don't hesitate to discuss with, a cup of coffee would help brain to works</p>
          </div>

          <div className="flex flex-row gap-3 justify-center">
            {
              socialLinks.map(link =>(
                <div className="hover:-translate-y-2 duration-150">
                  <Link to={link.url}>
                    <div className="bg-primary w-12 h-12 rounded-full p-3">
                      <img src={link.image}/>
                    </div>
                  </Link>
                </div>
                )
              )
            }
          </div>

        </div>
      </>
    );
  }

  export default Linktree;
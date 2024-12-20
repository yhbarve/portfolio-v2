import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import AboutMe from "../AboutMe";
import Socials from "../Socials";
import Navigation from "../Navigation";


export default function LeftSide(){
    
    return (
        <div className="">
           <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
            <div className="sticky top-0 flex flex-col lg:h-full justify-between">
                <AboutMe />
                <div className="lg:block hidden"><Navigation /></div>
                <div className="lg:block hidden"><Socials /></div>
            </div>
          </div>
        </div>
    )
}
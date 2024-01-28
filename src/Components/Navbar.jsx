import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Navbar() {



    return (
        <>
            <div className="flex justify-between py-4 md:px-9 px-1 w-full fixed z-20 top-0 bg-white border-b-2 border-blue-500 shadow-lg">
                <h2 className="text-3xl font-semibold text-blue-500">Purvi Dabhi</h2>


                <div className="md:flex gap-4 text-xl font-semibold hidden " >
                    <div className=" overflow-x-hidden">
                        <a className="hover:scale-105 peer " href="#">Home</a>
                        <div className="h-[3px] scale-0  rounded w-full bg-blue-500 peer-hover:animate-bottomLine"></div>
                    </div>
                    <div className=" overflow-x-hidden">
                        <a className="hover:scale-105 peer " href="#about">About</a>
                        <div className="h-[3px] scale-0  rounded w-full bg-blue-500 peer-hover:animate-bottomLine"></div>
                    </div>
                    <div className=" overflow-x-hidden">
                        <a className="hover:scale-105 peer" href="#skills">Skills</a>
                        <div className="h-[3px] scale-0  rounded w-full bg-blue-500 peer-hover:animate-bottomLine"></div>
                    </div>
                    <div className=" overflow-x-hidden">
                        <a className="hover:scale-105 peer " href="#project">Projects</a>
                        <div className="h-[3px] scale-0  rounded w-full bg-blue-500 peer-hover:animate-bottomLine"></div>
                    </div>
                    <div className=" overflow-x-hidden">
                        <a className="hover:scale-105 peer " href="#contact">Contact</a>
                        <div className="h-[3px] scale-0  rounded w-full bg-blue-500 peer-hover:animate-bottomLine"></div>
                    </div>
                    
                </div>

                <div className="flex gap-2 text-3xl text-blue-500">
                    <a href="https://www.linkedin.com/in/purvi-dabhi-792590280/"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/_purvi141?igsh=MTVzb3c3bDhyZjEyNA=="><FaInstagram /></a>
                    <a href="https://github.com/PurviDabhi"><FaGithub /></a>
                </div>
            </div>

        </>
    )
}

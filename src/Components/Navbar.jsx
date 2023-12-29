import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Navbar() {



    return (
        <>
            <div className="flex justify-between py-4 md:px-9 px-1  w-full fixed z-20 top-0 bg-white border-b-2 border-blue-500 shadow-lg">
                <h2 className="text-3xl font-semibold text-blue-500">Purvi Dabhi</h2>
                

                <div className="md:flex gap-4 text-xl font-semibold hidden ">
                    <a className="" href="">Home</a>
                    <a className="" href="#about">About</a>
                    <a className="" href="#skills">Skills</a>
                    <a className="" href="#project">Projects</a>
                    <a className="" href="#contact">Contact</a>
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

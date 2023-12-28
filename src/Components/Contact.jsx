
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
    return (
        <>
            <div className=" bg-blue-50" id="contact" data-aos="fade-up">
                <div className="flex justify-center">
                    <h1 className="text-bold text-3xl mt-10 border-double  border-b-8  border-blue-600 ">Contact</h1>
                </div>

                
                
                <div className="flex items-center justify-center mt-9 gap-8" >
                    <a href="https://www.linkedin.com/in/purvi-dabhi-792590280/"><FaLinkedin size={40} className="hover:scale-95 duration-300" /></a>
                    <a href="https://github.com/PurviDabhi"><FaGithub size={40} className="hover:scale-95 duration-300"/></a>
                    <a href="https://twitter.com/PurviDabhi54322"><RiTwitterXLine size={40} className="hover:scale-95 duration-300"/></a>
                    <a href="https://www.instagram.com/_purvi141?igsh=MTVzb3c3bDhyZjEyNA=="><FaInstagram size={40} className="hover:scale-95 duration-300"/></a>
                    <a href="mailto:purvidabhi73@gmail.com"><SiGmail size={40} className="hover:scale-95 duration-300"/></a>
                </div>   


                <div className="bg-blue-500 mt-6 ">
                    <p className="flex justify-center py-3 text-white text-lg">Created by PurviDabhi |©2023 All Right Reserved  </p>
                </div>

                


            </div>
        </>
    )
}
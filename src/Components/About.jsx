


export default function About() {
    return (
        <>
            <div className="min-h-screen" id="about">

                <div className="flex justify-center items-center">
                    <h1 className="text-3xl mt-10 border-double  border-b-8  border-blue-600">About me</h1>
                </div>
                <div className="flex justify-around lg:flex-row flex-col mt-10 gap-8 lg:px-12 md:px-8 " >
                    <img src="bitmoji_1.png" alt="" className=" bg-slate-400 h-auto w-80 border-4 rounded-xl mx-auto shadow-xl shadow-neutral-400 hover:shadow-lg hover:shadow-neutral-600 " data-aos="fade-up" data-aos-delay="50"/>
                    <div className="mt-6" data-aos="fade-up" data-aos-delay="50">
                        <h1 className="font-semibold text-2xl lg:text-start text-center">Coding is My Passion</h1>
                        <p className="text-xl font-medium mt-4 px-2 text-justify ">Greetings! I&apos;m Purvi, an enthusiastic web developer well-versed in CSS, Tailwind, React.js, Java, MySQL, Bootstrap, and more. I thrive on adapting to the ever-evolving tech landscape, always eager to learn and implement the latest trends in markup languages and web development. My approach combines a meticulous eye for detail with a passion for creating captivating digital experiences. I&apos;m committed to delivering clean, efficient code and user-centric designs. With a track record of diverse projects showcasing adaptability and innovation, I&apos;m ready to collaborate on your next web venture. Let&apos;s connect and craft something exceptional together!</p>
                        <p className="text-xl font-medium px-2 text-justify ">My expertise extends to Java, where I excel in implementing robust backend solutions and deploying server-side functionalities that elevate the performance of web applications. With MySQL, I ensure efficient database management, optimizing data storage and retrieval to bolster project functionality</p>
                        <a href="Purvi_Dabhi_CV.pdf" className="text-xl bg-blue-600 text-white rounded-md  py-2 my-3 block max-w-[15rem] text-center mx-auto lg:mx-0 hover:scale-95 duration-300">Download CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}

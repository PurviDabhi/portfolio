import Navbar from "./Navbar";



export default function Home() {
    return (
        <>
        <Navbar />
            <div className="flex justify-center items-center bg-blue-50 md:px-16 px-4 h-screen">

                <div className=" flex flex-col gap-2 justify-center text-center">
                    <h1 className="text-xl md:text-3xl">Hello,</h1>
                    <h1 className="text-4xl md:text-6xl font-bold">I&apos;m Purvi Dabhi</h1>
                    <h1 className="text-xl md:text-4xl font-medium text-blue-500">Front-End Developer</h1>
                    <h1 className="text-2xl">From India</h1>
                    <button className="rounded-lg w-32 py-3 text-white text-xl bg-blue-600 mx-auto hover:scale-95 duration-300">Hire Me</button>
                </div>
                
            </div>  
            

        </>
    )
}

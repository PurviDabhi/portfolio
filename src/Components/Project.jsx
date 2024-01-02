import { FaRegNewspaper } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiMovie2Fill } from "react-icons/ri";
import { FaQuoteRight } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";

export default function Project() {



    return (
        <>
            <div className="min-h-screen" id="project">

                <div className="flex justify-center items-center">
                    <h1 className="text-3xl mt-10 border-double  border-b-8  border-blue-600">Project</h1>
                </div>
                <div className="bg-white mt-8 pb-7 md:pb-0 flex flex-col justify-center items-center " >
                    <div className="grid md:grid-cols-3 gap-4 px-4 grid-cols-1" >
                        <div className="border rounded-xl shadow-md shadow-slate-300 flex flex-col gap-3 items-center justify-center px-3 py-2 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95" data-aos="fade-up">
                            <div className="rounded-full text-white px-3 py-3 bg-blue-500">
                                <FaRegNewspaper size={30} />
                            </div>
                            <h1 className="text-3xl font-semibold ">HeadlineHub</h1>
                            <p className="text-sm">The primary objective of the Newsapp is to offer users a convenient platform for accessing diverse and up-to-date news content from various reliable sources. The app aims to deliver an intuitive and engaging interface, catering to the preferences and interests of a wide range of users</p>
                        </div>
                        <a href="https://weatherapp-eta-lac.vercel.app/">
                            <div className="border rounded-xl shadow-md shadow-slate-300 flex flex-col gap-3 items-center justify-center px-3 py-2 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95" data-aos="fade-up">
                                <div className="rounded-full text-white px-3 py-3 bg-blue-500">
                                    <TiWeatherPartlySunny size={30} />
                                </div>
                                <h1 className="text-3xl font-semibold ">Climate Craze</h1>
                                <p className="text-sm ">The Weather App is developed to offer users a straightforward and informative interface for accessing accurate weather forecasts based on their location or specified locations. Utilizing modern web technologies, the app delivers a seamless user experience and provides valuable meteorological data from trusted sources</p>
                            </div>
                        </a>

                        <div className="border rounded-xl shadow-md shadow-slate-300 flex flex-col gap-3 items-center justify-center px-3 py-2 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  " data-aos="fade-up">
                            <div className="rounded-full text-white px-3 py-3 bg-blue-500">
                                <RiMovie2Fill size={30} />
                            </div>
                            <h1 className="text-3xl font-semibold ">Cinema Spotter</h1>
                            <p className="text-sm">The Movie Finder App serves as a comprehensive platform for users to discover information about movies, including details such as plot summaries, cast, ratings, release dates, and more. It leverages modern web technologies to deliver an intuitive and interactive interface for movie enthusiasts and casual users alike.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 px-4 grid-cols-1 md:mt-6 mt-3 md:mb-5">
                        <a href="https://purvidabhi.github.io/quotegenerator/">
                            <div className="border rounded-xl shadow-md shadow-slate-300 flex flex-col gap-3 items-center justify-center px-3 py-2 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  " data-aos="fade-up">
                                <div className="rounded-full text-white px-3 py-3 bg-blue-500">
                                    <FaQuoteRight size={30} />
                                </div>
                                <h1 className="text-3xl font-semibold ">Quote Quest</h1>
                                <p className="text-sm ">A quote generator is a software tool or application designed to display random or curated quotations to users. It serves as a source of inspiration, motivation, reflection, or entertainment by presenting diverse quotes from various categories, including literature, famous personalities, movies, or speeches</p>
                            </div>
                        </a>
                        
                        <div className="border rounded-xl shadow-md shadow-slate-300 flex flex-col gap-3 items-center justify-center px-3 py-2 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  " data-aos="fade-up">
                            <div className="rounded-full text-white px-3 py-3 bg-blue-500">
                                <LuListTodo size={30} />
                            </div>
                            <h1 className="text-3xl font-semibold ">ToDo List</h1>
                            <p className="text-sm ">A To-Do list is a simple yet powerful tool used to organize tasks, responsibilities, or activities that need to be completed within a certain timeframe. It serves as a visual and practical aid in managing daily, weekly, or long-term objectives efficiently</p>
                        </div>
                        <div className="border rounded-xl shadow-md shadow-slate-300 flex flex-col gap-3 items-center justify-center px-3 py-2 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  " data-aos="fade-up">
                            <div className="rounded-full text-white px-3 py-3 bg-blue-500">
                                <ImSpoonKnife size={30} />
                            </div>
                            <h1 className="text-3xl font-semibold ">SpiceHub</h1>
                            <p className="text-sm">A SpiceHub is a digital platform or mobile application designed to provide users with a comprehensive collection of recipes for cooking various dishes. These apps offer a wide range of features to assist users in meal planning, cooking, and exploring new culinary experiences</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}



function SkillCard({image,title}) {
    return (
        <>
            <div className="lg:col-span-3 col-span-4 md:my-0 my-4 cursor-pointer " data-aos="fade-up">
                <img src={image} className="md:h-28 h-16 block mx-auto hover:scale-110 duration-500 transition-all " alt="" />
                <h3 className="text-center font-semibold mt-2 md:text-xl ">{title}</h3>
            </div>
        </>
    )
}

export default SkillCard
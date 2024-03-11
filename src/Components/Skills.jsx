
import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <>
            <div className="min-h-screen bg-blue-50" id="skills">
                <div className="flex justify-center">
                    <h1 className=" text-3xl mt-10 border-double  border-b-8  border-blue-600 ">Skills</h1>
                </div>
                <div className="w-full max-w-3xl mx-auto mt-14 grid grid-cols-12 md:gap-9 gap-2 pb-6">
                    <SkillCard image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title={"HTML5"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} title={"CSS"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} title={"JavaScript"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} title={"React"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} title={"BootStrap"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} title={"Tailwind CSS"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} title={"JAVA"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"} title={"Python"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} title={"MYSQL"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"} title={".NET"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"} title={"C#"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"} title={"PHP"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"} title={"Material UI"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"} title={"Oracle"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"} title={"SqlLite"} />
                    <SkillCard image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"} title={"Microsoft Sequel Server"} />
                    

                    
                </div>
            </div>
        </>
    )
}

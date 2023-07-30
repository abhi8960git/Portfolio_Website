import { motion } from 'framer-motion';
import { useAtom } from "jotai";
import { currentProjectAtom } from "./Projects";
import projects from '../../src/assets/data.json'

const Section = (props) => {
    const { children } = props;
    return <motion.section
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1, y: 0,
            transition: {
                duration: 1,
                delay: 0.6
            }
        }}
        className='h-screen w-screen p-8 max-w-screen-2xl flex flex-col items-start justify-center'>
        {children}</motion.section>
}

import React from 'react';
import Button from './HTMLC/Button.jsx';
import TextAnimation from './HTMLC/TextAnimation.jsx';
import ContactButton from './HTMLC/ContactButton.jsx';




export const Interface = (props) => {
    const {setSection} = props;
    return (
        <div className='flex flex-col items-center w-screen'>
            <AboutSection setSection={setSection}></AboutSection>
            <SkiilsSection></SkiilsSection>
            <ProjectsSection />
            <ContactSection></ContactSection>
        </div>
    )
}

export default Interface;

const AboutSection = (props) => {
    const {setSection} = props;
    return (
        <Section>
            <h1 className=' text-6xl font-extrabold leading-sung font text-black hover:text-indigo-500 cursor-pointer transition duration-300'>
                Hi🖐️,I'm
                <br />
                <span className=' px-1 text-[45px] '>Abhishek Kumar</span>
            </h1>
            <motion.p

                className='text-lg text-black hover:text-indigo-400 mt-4 font1  transition duration-300'
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                I am a <span className='font text-yellow-300'>MERN</span> Stack and <span className='font text-yellow-300'> Blockchain</span> Developer
                <br />
                love to code !
            </motion.p>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                <Button setSection={setSection}></Button>
            </motion.div>

        </Section>
    )
}


const skills = [

    {
        name: 'BlockChain(Ethereum | Polygon)',
        level: '80%',
    },
    {
        name: "Solidity",
        level: '80%'
    },
    {
        name: 'React.js | Next.js | Tailwind Css',
        level: '70%',
    },
    {
        name: "Node.js | Express.js | mongoDB",
        level: "60%"
    },
    {
        name: "JavaScript",
        level: "70%"
    },
    {
        name: "Framer | gsap",
        level: "60%"
    },
    {
        name: "React Three Fiber",
        level: "50%"
    },
    {
        name: "TypeScript",
        level: "60%"
    }

]







const SkiilsSection = () => {
    return (
        <Section>
            < motion.div whileInView={"visible"}>
                <h2 className='text-7xl font-bolc font text-red-500'>
                  Skills
                </h2>
                <div className="mt-8 space-y-4 text-white">
                    {
                        skills.map((skill, index) => (

                            <div className="w-64" key={index}>
                                <motion.h3
                                    initial={{
                                        opacity: 0
                                    }}

                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2
                                            }
                                        }
                                    }}

                                    className='text-[14px] font-bold text-white font1 '>{skill.name}</motion.h3>
                                {/* <div className=' w-full bg-gray-200 rounded-full mt-2'>
                                    <div className='h-full bg-indigo-500 rounded-full'
                                        // style={{ width: skill.level }}
                                    />
                                </div> */}

                                <div className='h2 w-full bg-gray-300  '>
                                    <motion.div
                                        initial={{
                                            scaleX: 0,
                                            originX: 0
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 1 + index * 0.2,
                                                }
                                            }
                                        }}

                                        className='w-full bg-blue-600  h-[9px] mt-2'
                                        style={{ width: skill.level }}>
                                    </motion.div>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </Section>
    )
}


const ContactSection = () => {
    return (
        <Section>
           <p className='font text-6xl'>Contact Me</p>
            <div className="mt-8 p-5 bg-white w-80 max-w-full card">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full outline-none border-[3px] border-black p-2"
                    />
                    <label
                        for="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full outline-none border-[3px] border-black p-2"
                    />
                    <label
                        for="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full outline-none border-[3px] border-black p-2"
                    />
                    <ContactButton></ContactButton>
                </form>
            </div>
        </Section>
    );
};

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
            <div className="flex w-full h-full gap-8 items-center justify-center mt-[100px] ">
                <button
                    className="hover:text-indigo-600 transition-colors font text-white"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font text-red-200">Projects</h2>
                <button
                    className="hover:text-indigo-600 transition-colors font text-white"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion-3d';
import { Image, Text } from '@react-three/drei';
import projects from '../../src/assets/data.json';
import { atom, useAtom } from 'jotai';
import { animate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';


const Project = (props) => {
    const { project, highlighted } = props
    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(()=>{
        animate(bgOpacity, highlighted ? 0.7 : 0.4);
    },[highlighted])

    useFrame(()=>{
        background.current.material.opacity = bgOpacity.get();
    })

    return (
        <group {...project}
        >
            <mesh
                position-z={-0.001}
                //  onClick={()=>project.url , "_blank"}
                ref={background}
            >
                <planeGeometry args={[2.3, 3]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image
                scale={[2, 1.2, 1]}
                url={project.image_url}
                toneMapped={false}
                position-y={0.7}
            />
            <Text
                maxWidth={2}
                fontSize={0.25}
                position={[-1, -0.1, 0]}
                anchorX={"left"}
                anchorY={"top"}
            >{project.title}
            </Text>
            <Text
                maxWidth={2}
                fontSize={0.12}
                position={[-1, -0.4, 0]}
                anchorX={"left"}
                anchorY={"top"}
            >{project.description}
            </Text>

        </group>
    )
}


export const currentProjectAtom = atom(Math.floor(projects.length / 2))



const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return (
        <group position-y={-viewport.height * 2 + 1}>
            {
                projects.map((project, index) => (
                    <motion.group
                    animate={{
                        x:0 + (index - currentProject) * 3,
                        y:currentProject === index ? 0 : -0.1,
                        z:currentProject === index ? -2 :-3,
                        rotateX: currentProject === index ? 0 : -Math.PI / 3,
                        rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
                    }}
                     key={"project_" + index} position={[index * 2.5, 0, -3]}
                     >
                        <Project project={project} highlighted={index === currentProject} />
                    </motion.group>
                ))
            }
        </group>
    )
}

export default Projects
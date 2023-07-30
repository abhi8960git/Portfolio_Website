import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from '@react-three/drei'
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager.jsx";
import { useState } from 'react'
import Menu from "./components/Menu";
import {MotionConfig} from 'framer-motion'
import {Leva} from "leva"
import { framerMotionConfig } from "./config";
import Cursor from "./components/Cursor";
function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
    <MotionConfig
    transition={{
     ...framerMotionConfig
    }}
    >

      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection}></ScrollManager>
       <Scroll>
       <Experience  section ={section} menuOpened ={menuOpened}/>
       </Scroll>
          <Scroll html>
            <Interface setSection={setSection}></Interface>


          </Scroll>
        </ScrollControls>


      </Canvas>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} ></Menu>
      <Cursor></Cursor>
      </MotionConfig>
      <Leva hidden/>
    </>

  );
}

export default App;

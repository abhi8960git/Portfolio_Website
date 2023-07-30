/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/649c82b8c953ad11e59bdc3a.glb
*/
import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva'
import * as THREE from 'three';

export function Modal(props) {
    const { animation } = props;
    const { headFollow ,cursorFollow ,wireframe} = useControls({
        headFollow: false,
        cursorFollow: false,
        wireframe:false
    })
    const group = useRef();
    const { nodes, materials } = useGLTF('models/649c82b8c953ad11e59bdc3a.glb')

    const { animations: typingAnimation } = useFBX("animations/Typing.fbx")
    const { animations: StandingAnimation } = useFBX("animations/StandingIdle.fbx")
    const { animations: fallingAnimation } = useFBX("animations/FallingIdle.fbx")

    typingAnimation[0].name = "Typing";
    StandingAnimation[0].name = "Standing";
    fallingAnimation[0].name = "Falling";
    const { actions } = useAnimations([typingAnimation[0], StandingAnimation[0], fallingAnimation[0]], group)


    useFrame((state) => {
        if (headFollow)
            group.current.getObjectByName("Head").lookAt(state.camera.position);
        if (cursorFollow) {
            const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
            group.current.getObjectByName("Spine2").lookAt(target);

        }

    })

    useEffect(() => {
        actions[animation].reset().fadeIn(0.5).play();
        return () => {
            actions[animation].reset().fadeOut(0.5)
        }
    }, [animation])

    useEffect(()=>{
        Object.values(materials).forEach((material)=>{
            material.wireframe = wireframe;
        })
    },[wireframe])

    return (
        <group {...props} ref={group} dispose={null}>
            <group rotation-x={-Math.PI / 2}>
                <primitive object={nodes.Hips} />
                <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
                <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
                <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
                <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
                <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
                <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
                <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
                <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
                <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
            </group>
        </group>
    )
}

useGLTF.preload('models/649c82b8c953ad11e59bdc3a.glb')
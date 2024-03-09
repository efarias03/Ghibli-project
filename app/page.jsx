"use client";
import * as THREE from 'three'
import { CameraControls, Image, OrbitControls, Plane, Sparkles, Text, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";



function Background() {
  return(
    <div id="background">
      <div id="background-logo"></div>
    </div>
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * .15, mouse.y * .15, camera.position.z), 0.02))
}

function Images() {
  const textures = useTexture(["/ghibli-project-imgs/YARD.png", "/ghibli-project-imgs/B_TREE.png", "/ghibli-project-imgs/BIG TOT.png", "/ghibli-project-imgs/HOUSE.png", "/ghibli-project-imgs/YARD.png", "/ghibli-project-imgs/SMALL TOT.png", "/ghibli-project-imgs/Cloud1.png", "/ghibli-project-imgs/Cloud2.png", "/ghibli-project-imgs/F_TREE.png"])
  return(
    <group>
      <Image transparent position={[.5, .2, -6]} scale={2} url='/ghibli-project-imgs/HOUSE.png' />
      <Image side={2} position={[-.3, -.8, -7]} scale={[5, 2.5, 1]} rotation={[0, 0, 0]} url='/ghibli-project-imgs/YARD.png' />

      <mesh position={[0, -.6, -4]} rotation={[-1.5, 0, 0]}>
        <planeGeometry args={[6, 4, 1]}/>
        <meshStandardMaterial transparent map={textures[0]} />
      </mesh>
      <mesh position={[-1.1, .75, -4]} scale={3} rotation={[0, .7, 0]}>
        <planeGeometry args={[1, 1, 1]}/>
        <meshToonMaterial transparent map={textures[1]} />
      </mesh>
      <mesh position={[-.2, -.12, -4]} scale={1} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial transparent map={textures[2]} />
        <Sparkles count={50} speed={.5} />
      </mesh>
      <mesh position={[-.6, .6, -6]} scale={2} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 1, 1]}/>
        <meshToonMaterial transparent map={textures[8]} />
      </mesh>
      <mesh position={[1.2, 1.4, -4]} scale={4} rotation={[0, -.8, 0]}>
        <planeGeometry args={[1, 1, 1]}/>
        <meshToonMaterial transparent map={textures[8]} />
      </mesh>

      {/* <Image transparent position={[0, -.1, -4]} scale={1} url='/ghibli-project-imgs/BIG TOT.png' /> */}
      <Image transparent position={[.2, -.45, -4]} scale={.3} url='/ghibli-project-imgs/SMALL TOT.png' />
      <Image transparent position={[1.2, .15, -5]} rotation={[0, -.8, 0]} scale={2} url='/ghibli-project-imgs/FRONT HOUSE.png' />
      <Image transparent position={[-1.5, 1.5, -8]} rotation={[0, 0, 0]} scale={[5, 2, 1]} url='/ghibli-project-imgs/Cloud1.png' />
      <Image transparent position={[1.5, 1.5, -8]} rotation={[0, 0, 0]} scale={[3, 2, 1]} url='/ghibli-project-imgs/Cloud2.png' />

      {/* <Image transparent position={[-1.5, .2, -5]} rotation={[0, .8, 0]} scale={2} url='/ghibli-project-imgs/B_TREE.png' /> */}
      {/* <Text children={"Ghibli"} /> */}
    </group>
  )
}

function Overlay() {
  return(
    <div id="overlay">
    <div id="nav-container">
        <div id="nav-logo">
          logo
        </div>
      <nav>

        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Gallery</li>
          <li>Shop</li>
        </ul>

      </nav>
    </div>

    </div>
  )
}

function Scene() {
  return(
    <Canvas id="canvas" camera={{ position: [0, 0, 0], fov: 25 }}>
      <ambientLight intensity={1.2} />
      <Images />
      <Rig />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}

export default function Home() {
  return (
    <>
    {/* <h1>Hello World</h1> */}
    <Background />
    <Overlay />
    <Scene />
    </>
  );
}

"use client";
import * as THREE from 'three'
import { CameraControls, Html, Image, OrbitControls, Plane, Sparkles, Text, useProgress, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from 'react';



function Background() {
  return (
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
  return (
    <group>
      <Image transparent position={[.5, .2, -6]} scale={2} url='/ghibli-project-imgs/HOUSE.png' />
      <Image side={2} position={[-.3, -.8, -7]} scale={[5, 2.5, 1]} rotation={[0, 0, 0]} url='/ghibli-project-imgs/YARD.png' />

      <mesh position={[0, -.6, -4]} rotation={[-1.5, 0, 0]}>
        <planeGeometry args={[6, 4, 1]} />
        <meshStandardMaterial transparent map={textures[0]} />
      </mesh>
      <mesh position={[-1.1, .75, -4]} scale={3} rotation={[0, .7, 0]}>
        <planeGeometry args={[1, 1, 1]} />
        <meshToonMaterial transparent map={textures[1]} />
      </mesh>
      <mesh position={[-.2, -.12, -4]} scale={1} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 1, 1]} />
        <meshStandardMaterial transparent map={textures[2]} />
        <Sparkles count={50} speed={.5} />
      </mesh>
      <mesh position={[-.6, .6, -6]} scale={2} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 1, 1]} />
        <meshToonMaterial transparent map={textures[8]} />
      </mesh>
      <mesh position={[1.2, 1.4, -4]} scale={4} rotation={[0, -.8, 0]}>
        <planeGeometry args={[1, 1, 1]} />
        <meshToonMaterial transparent map={textures[8]} />
      </mesh>

      {/* <Image transparent position={[0, -.1, -4]} scale={1} url='/ghibli-project-imgs/BIG TOT.png' /> */}
      <Image transparent position={[.2, -.45, -4]} scale={.3} url='/ghibli-project-imgs/SMALL TOT.png' />
      <Image transparent position={[1.2, .15, -5]} rotation={[0, -.8, 0]} scale={2} url='/ghibli-project-imgs/FRONT HOUSE.png' />
      <Image transparent position={[-1.5, 1.5, -8]} rotation={[0, 0, 0]} scale={[5, 2, 1]} url='/ghibli-project-imgs/Cloud1.png' />
      <Image transparent position={[1.5, 1.5, -8]} rotation={[0, 0, 0]} scale={[3, 2, 1]} url='/ghibli-project-imgs/Cloud2.png' />

      {/* <Image transparent position={[-1.5, .2, -5]} rotation={[0, .8, 0]} scale={2} url='/ghibli-project-imgs/B_TREE.png' /> */}
      <Text position={[-1, 0, -4]} rotation={[0, .8, 0]} children={`Ghibli\nStudios`} font='/Outfit-Medium.ttf' fontSize={.2} lineHeight={.8} color={"#fff"} />
    </group>
  )
}

function Overlay() {
  return (
    <div id="overlay">
      <div id="nav-container">
        <div id="nav-logo">
          <img src="/nav-logo.png" />
        </div>
        <nav>

          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2207 8.48752L8.4932 12.215C7.67653 13.0317 6.33487 13.0317 5.51237 12.215L1.78486 8.48752C0.968197 7.67085 0.968197 6.3292 1.78486 5.5067L5.51237 1.77919C6.32904 0.96252 7.6707 0.96252 8.4932 1.77919L12.2207 5.5067C13.0374 6.3292 13.0374 7.67085 12.2207 8.48752Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.646 3.64581L10.3543 10.3541" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.3543 3.64581L3.646 10.3541" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.6665 1.16669V2.91669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.3335 1.16669V2.91669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.0835 7.58331H8.75016" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.0835 9.91669H7.00016" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.33333 2.04169C11.2758 2.14669 12.25 2.88752 12.25 5.62919V9.23419C12.25 11.6375 11.6667 12.8392 8.75 12.8392H5.25C2.33333 12.8392 1.75 11.6375 1.75 9.23419V5.62919C1.75 2.88752 2.72417 2.15252 4.66667 2.04169H9.33333Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Movies
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4H4V8H8V4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 11C3.325 11 4 10.325 4 9.5V8H2.5C1.675 8 1 8.675 1 9.5C1 10.325 1.675 11 2.5 11Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 4H4V2.5C4 1.675 3.325 1 2.5 1C1.675 1 1 1.675 1 2.5C1 3.325 1.675 4 2.5 4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 4H9.5C10.325 4 11 3.325 11 2.5C11 1.675 10.325 1 9.5 1C8.675 1 8 1.675 8 2.5V4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 11C10.325 11 11 10.325 11 9.5C11 8.675 10.325 8 9.5 8H8V9.5C8 10.325 8.675 11 9.5 11Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Gallery
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.6665 1.16669V2.91669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.3335 1.16669V2.91669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.0835 7.58331H8.75016" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.0835 9.91669H7.00016" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.33333 2.04169C11.2758 2.14669 12.25 2.88752 12.25 5.62919V9.23419C12.25 11.6375 11.6667 12.8392 8.75 12.8392H5.25C2.33333 12.8392 1.75 11.6375 1.75 9.23419V5.62919C1.75 2.88752 2.72417 2.15252 4.66667 2.04169H9.33333Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Shop
              </a>
            </li>
          </ul>

        </nav>
      </div>


      <div id="hero-button-container">
        <div id="hero-button">
          <a href="">Discover Ghibli World</a>
        </div>
      </div>

    </div>
  )
}

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function Scene() {
  return (
    <Canvas id="canvas" camera={{ position: [0, 0, 0], fov: 25 }}>
      <Suspense fallback={<Loader />}>
      <ambientLight intensity={1.2} />
      <Images />
      <Rig />
      </Suspense>
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

import { OrbitControls, Stars                 } from "@react-three/drei"
import { Canvas,                              } from "@react-three/fiber"
import { Physics, usePlane                    } from "@react-three/cannon"
import { Cube, CubeB, Sphere                  } from "/Models/Shapes"
// import { BlueWhaleModel                       } from "/Models/Bluewhale"
// import { GhostKeelModel                       } from "/Models/Ghostkeel"
// import { StormSurgeModel                      } 

export default function ThreeJSScene() {
  return (
    <Canvas>
      <color attach="background" args={["lightblue"]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[15, 5, 15]} angle={0.2} />
      <Stars />

      <Physics>
        <FloorPlane position={[0, 0, 0]} />

        <Cube position={[0, 5, 0]} />
        <Cube position={[1, 3, 2]} />
        <Cube position={[1, 6, 2.5]} />
        <CubeB position={[1, 5, 1]} />
        <Sphere position={[0, 3, 0]} />
{/* 
        <BlueWhaleModel  position={[5, 0, 0]} scale={0.005} />
        <GhostKeelModel position={[-4, 0, -15]} scale={0.05} />
        <StormSurgeModel position={[5, 0, -15]} scale={0.5} /> */}
      </Physics>

    </Canvas>
  )
}

  function FloorPlane(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh ref={ref}>
        <planeGeometry args={[1000, 1000]} />
        <meshLambertMaterial attach="material" color="pink" />
      </mesh>
    ) 
  }
import { useFrame,                    } from "@react-three/fiber"
import { useBox, useSphere } from "@react-three/cannon"

export function Cube(props) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props}));
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 10,0);
    }} ref={ref}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  ) 
}

export function CubeB(props) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props}));
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    // console.log(a);
  })
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 10,0);
    }} ref={ref}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="purple" />
    </mesh>
  ) 
}

export function Sphere(props) {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props}));
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 10,0);
    }} ref={ref}>
      <sphereGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="red" wireframe={true}/>
    </mesh>
  ) 
}
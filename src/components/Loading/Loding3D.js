import styled from 'styled-components';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
const MainArea = styled.div`

  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

  div.text {
    width: 1200px;
    margin: 0 auto;
    p {
      position: relative;
      top: 60px;
      width: 100%;
      color: black;
      font-weight: 600;
      font-size: 60px;
      letter-spacing: 6px;
      line-height: 1.4;
    }
  }
`;
function Earth(props) {
    const { nodes, materials } = useGLTF('/lowpoly_earth.glb')
    const boxRef = useRef();
    // useFrame(() => {
    //     boxRef.current.rotation.x += 0.02;
    //     boxRef.current.rotation.y += 0.02;
    // });
    return (
        <group {...props} ref={boxRef} dispose={null} position={[0, -1, 0]} scale={0.003}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-60.98, 141.47, 49.56]} rotation={[-Math.PI / 2, 0, 0]} scale={287.43}>
                        <mesh geometry={nodes.Icosphere001_Material004_0.geometry} material={materials['Material.004']} />
                        <mesh geometry={nodes.Icosphere001_Material005_0.geometry} material={materials['Material.005']} />
                        <mesh geometry={nodes.Icosphere001_Material006_0.geometry} material={materials['Material.006']} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Model(props) {

    const { nodes, materials } = useGLTF('/scene.gltf')
    const boxRef = useRef();

    useFrame(() => {
        // boxRef.current.rotation.x += 0.02;
        boxRef.current.rotation.y += 0.02;
    });
    return (
        <group {...props} ref={boxRef} position={[0, 1, 0]} dispose={null} scale={0.002}>
            <group>
                <group>
                    <group position={[32.75, 127.03, 554.54]} rotation={[Math.PI, 1.5, 3]} />
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.twitter_logo_twitter_logo_0.geometry} material={materials.twitter_logo} />
                    </group>
                </group>
            </group>
        </group>
    )
}




const Loding3D = () => {
    return (
        <MainArea>
            <Canvas>
                <Suspense fallback={null}>
                    <directionalLight intensity={1} />
                    <ambientLight intensity={1.2} />
                    <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Model />
                    <Earth />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                </Suspense>
            </Canvas>
        </MainArea>
    );
};

export default Loding3D;


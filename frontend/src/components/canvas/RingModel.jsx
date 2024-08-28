// import decorated_ring from '../../assets/3d/decorated_ring.glb'
// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring)
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload(decorated_ring)


//? spinning version

// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   useFrame(() => {
//     // Rotate the ring around the Y-axis
//     groupRef.current.rotation.y += 0.01;
//   });

//   return (
//     <group ref={groupRef} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload(decorated_ring);



// ? jumps to window
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   // Define the animation using react-spring
//   const { scale, position } = useSpring({
//     from: { scale: 0, position: [0, -5, 0] }, // Start small and below the view
//     to: { scale: 1, position: [0, 0, 0] }, // Expand to full size and move into view
//     config: { tension: 180, friction: 12 }, // Adjust for smooth animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   // Rotate the ring continuously
//   useFrame(() => {
//     groupRef.current.rotation.y += 0.01; // Rotate around the Y-axis
//   });

//   return (
//     <animated.group ref={groupRef} scale={scale} position={position} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//     </animated.group>
//   );
// }

// useGLTF.preload(decorated_ring);


//?jump scare version
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   // Define the animation using react-spring
//   const { scale, positionZ } = useSpring({
//     from: { scale: 0.1, positionZ: -20 }, // Start small and far away
//     to: async (next) => {
//       await next({ scale: 1, positionZ: 0 }); // Move to full size and front of the screen
//       await next({ scale: 1.1 }); // Slight bump to make it pop
//       await next({ scale: 1 }); // Settle at the final size
//     },
//     config: { tension: 180, friction: 12 }, // Adjust for smooth animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   // Rotate the ring continuously
//   useFrame(() => {
//     groupRef.current.rotation.y += 0.01; // Rotate around the Y-axis
//   });

//   return (
//     <animated.group
//       ref={groupRef}
//       scale={scale}
//       position-z={positionZ}
//       {...props}
//       dispose={null}
//     >
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//     </animated.group>
//   );
// }

// useGLTF.preload(decorated_ring);

//? right to frame
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   // Define the animation using react-spring
//   const { positionX, scale, rotationY } = useSpring({
//     from: { positionX: 10, scale: 0.1, rotationY: Math.PI * 2 }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({ positionX: 0, scale: 1, rotationY: 0 }); // Move to center, full size, upright
//       await next({ scale: 1.1 }); // Slight bump to make it pop
//       await next({ scale: 1 }); // Settle at the final size
//     },
//     config: { tension: 120, friction: 14 }, // Adjust for smoother animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   // Rotate the ring continuously after reaching its final position
//   useFrame(() => {
//     groupRef.current.rotation.y += 0.01; // Rotate around the Y-axis
//   });

//   return (
//     <animated.group
//       ref={groupRef}
//       position-x={positionX}
//       scale={scale}
//       rotation-y={rotationY}
//       {...props}
//       dispose={null}
//     >
//       <group rotation={[0, 0, 0]}> {/* Standing upright */}
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//         />
//       </group>
//     </animated.group>
//   );
// }

// useGLTF.preload(decorated_ring);

//?diagonal spinz
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   // Define the animation using react-spring
//   const { positionX, scale, rotationY, rotationX } = useSpring({
//     from: { positionX: 10, scale: 0.1, rotationY: Math.PI * 2, rotationX: 0 }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({ positionX: 0, scale: 1, rotationY: 0, rotationX: Math.PI / 2 }); // Move to center, full size, upright
//       await next({ scale: 1.1 }); // Slight bump to make it pop
//       await next({ scale: 1 }); // Settle at the final size
//     },
//     config: { tension: 120, friction: 14 }, // Adjust for smoother animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   // Rotate the ring continuously after reaching its final position
//   useFrame(() => {
//     groupRef.current.rotation.y += 0.01; // Rotate around the Y-axis
//     groupRef.current.rotation.x += 0.01; // Rotate around the X-axis
//   });

//   return (
//     <animated.group
//       ref={groupRef}
//       position-x={positionX}
//       scale={scale}
//       rotation-y={rotationY}
//       rotation-x={rotationX}
//       {...props}
//       dispose={null}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.defaultMaterial.geometry}
//         material={materials.DefaultMaterial}
//       />
//     </animated.group>
//   );
// }

// useGLTF.preload(decorated_ring);

//!! good version
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   // Define the animation using react-spring
//   const { positionX, positionZ, scale, rotationY, rotationX, rotationZ } = useSpring({
//     from: {
//       positionX: 10,
//       positionZ: -20, // Start from the back
//       scale: 0.1,
//       rotationY: Math.PI * 2,
//       rotationX: Math.PI, // Flip the ring upside down
//       rotationZ: 0,
//     }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({
//         positionX: 0,
//         positionZ: 0, // Move to the front
//         scale: 1,
//         rotationY: 0,
//         rotationX: -Math.PI / 2, // Point the ring up, gem facing up
//         rotationZ: -Math.PI / 6, // Tilt the ring slightly towards the screen
//       }, 2000); // Move to center, full size, upright, and bent
//     },
//     config: { tension: 120, friction: 14, duration: 2000 }, // Adjust for smoother animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   // Rotate the ring continuously after reaching its final position
//   useFrame(() => {
//     groupRef.current.rotation.y += 0.01; // Rotate around the Y-axis
//     groupRef.current.rotation.x += 0.01; // Rotate around the X-axis
//   });

//   return (
//     <animated.group
//       ref={groupRef}
//       position-x={positionX}
//       position-z={positionZ}
//       scale={scale}
//       rotation-y={rotationY}
//       rotation-x={rotationX}
//       rotation-z={rotationZ}
//       {...props}
//       dispose={null}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.defaultMaterial.geometry}
//         material={materials.DefaultMaterial}
//       />
//     </animated.group>
//   );
// }

// useGLTF.preload(decorated_ring);


//!! best version
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef = useRef();

//   // Define the animation using react-spring
//   const { positionX, positionZ, scale, rotationY, rotationX, rotationZ } = useSpring({
//     from: {
//       positionX: 10,
//       positionZ: -20, // Start from the back
//       scale: 0.1,
//       rotationY: Math.PI * 2,
//       rotationX: Math.PI, // Flip the ring upside down
//       rotationZ: 0,
//     }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({
//         positionX: 0,
//         positionZ: 0, // Move to the front
//         scale: 1,
//         rotationY: 0,
//         rotationX: -Math.PI / 4, // Point the ring up, gem facing up, and tilt towards the user
//         rotationZ: -Math.PI / 6, // Tilt the ring slightly towards the screen
//       }, 2000); // Move to center, full size, upright, and bent
//     },
//     config: { tension: 120, friction: 14, duration: 2000 }, // Adjust for smoother animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   // Rotate the ring continuously after reaching its final position
//   useFrame(() => {
//     groupRef.current.rotation.y -= 0.01; // Rotate around the Y-axis
//     groupRef.current.rotation.x -= 0.01; // Rotate around the X-axis
//   });

//   return (
//     <animated.group
//       ref={groupRef}
//       position-x={positionX}
//       position-z={positionZ}
//       scale={scale}
//       rotation-y={rotationY}
//       rotation-x={rotationX}
//       rotation-z={rotationZ}
//       {...props}
//       dispose={null}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.defaultMaterial.geometry}
//         material={materials.DefaultMaterial}
//       />
//     </animated.group>
//   );
// }

// useGLTF.preload(decorated_ring);









//! scary snakey version
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useSpring, animated } from '@react-spring/three';
// import decorated_ring from '../../assets/3d/decorated_ring.glb';

// export function RingModel(props) {
//   const { nodes, materials } = useGLTF(decorated_ring);
//   const groupRef1 = useRef();
//   const groupRef2 = useRef();
//   const groupRef3 = useRef();

//   // Define the animation using react-spring
//   const { positionX1, positionZ1, scale1, rotationY1, rotationX1, rotationZ1 } = useSpring({
//     from: {
//       positionX: 10,
//       positionZ: -20, // Start from the back
//       scale: 0.1,
//       rotationY: Math.PI * 2,
//       rotationX: Math.PI, // Flip the ring upside down
//       rotationZ: 0,
//     }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({
//         positionX: 0,
//         positionZ: 0, // Move to the front
//         scale: 1,
//         rotationY: 0,
//         rotationX: -Math.PI / 4, // Point the ring up, gem facing up, and tilt towards the user
//         rotationZ: -Math.PI / 6, // Tilt the ring slightly towards the screen
//       }, 2000); // Move to center, full size, upright, and bent
//     },
//     config: { tension: 120, friction: 14, duration: 2000 }, // Adjust for smoother animation
//     delay: 200, // Optional: delay the animation slightly
//   });

//   const { positionX2, positionZ2, scale2, rotationY2, rotationX2, rotationZ2 } = useSpring({
//     from: {
//       positionX: 5,
//       positionZ: -15, // Start from the back
//       scale: 0.07,
//       rotationY: Math.PI,
//       rotationX: Math.PI / 2, // Flip the ring upside down
//       rotationZ: 0,
//     }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({
//         positionX: 2,
//         positionZ: 0, // Move to the front
//         scale: 0.7,
//         rotationY: Math.PI / 2,
//         rotationX: -Math.PI / 6, // Point the ring up, gem facing up, and tilt towards the user
//         rotationZ: Math.PI / 3, // Tilt the ring slightly towards the screen
//       }, 2000); // Move to center, smaller size, upright, and bent
//     },
//     config: { tension: 120, friction: 14, duration: 2000 }, // Adjust for smoother animation
//     delay: 400, // Optional: delay the animation slightly
//   });

//   const { positionX3, positionZ3, scale3, rotationY3, rotationX3, rotationZ3 } = useSpring({
//     from: {
//       positionX: 0,
//       positionZ: -10, // Start from the back
//       scale: 0.05,
//       rotationY: 0,
//       rotationX: Math.PI, // Flip the ring upside down
//       rotationZ: 0,
//     }, // Start off-screen to the right, small, spinning fast
//     to: async (next) => {
//       await next({
//         positionX: -2,
//         positionZ: 0, // Move to the front
//         scale: 0.5,
//         rotationY: -Math.PI / 2,
//         rotationX: Math.PI / 3, // Point the ring up, gem facing up, and tilt towards the user
//         rotationZ: -Math.PI / 3, // Tilt the ring slightly towards the screen
//       }, 2000); // Move to center, smaller size, upright, and bent
//     },
//     config: { tension: 120, friction: 14, duration: 2000 }, // Adjust for smoother animation
//     delay: 600, // Optional: delay the animation slightly
//   });

//   // Rotate the rings continuously after reaching their final positions
//   useFrame(() => {
//     groupRef1.current.rotation.y -= 0.01; // Rotate around the Y-axis
//     groupRef1.current.rotation.x -= 0.01; // Rotate around the X-axis

//     groupRef2.current.rotation.y += 0.02; //
//     groupRef2.current.rotation.x += 0.01; // Rotate around the X-axis

//     groupRef3.current.rotation.y -= 0.03; // Rotate around the Y-axis
//     groupRef3.current.rotation.x += 0.02; // Rotate around the X-axis
//   });

//   return (
//     <>
//       <animated.group
//         ref={groupRef1}
//         position-x={positionX1}
//         position-z={positionZ1}
//         scale={scale1}
//         rotation-y={rotationY1}
//         rotation-x={rotationX1}
//         rotation-z={rotationZ1}
//         {...props}
//         dispose={null}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//         />
//       </animated.group>

//       <animated.group
//         ref={groupRef2}
//         position-x={positionX2}
//         position-z={positionZ2}
//         scale={scale2}
//         rotation-y={rotationY2}
//         rotation-x={rotationX2}
//         rotation-z={rotationZ2}
//         {...props}
//         dispose={null}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//         />
//       </animated.group>

//       <animated.group
//         ref={groupRef3}
//         position-x={positionX3}
//         position-z={positionZ3}
//         scale={scale3}
//         rotation-y={rotationY3}
//         rotation-x={rotationX3}
//         rotation-z={rotationZ3}
//         {...props}
//         dispose={null}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.DefaultMaterial}
//         />
//       </animated.group>
//     </>
//   );
// }


// useGLTF.preload(decorated_ring);








//!!
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import decorated_ring from '../../assets/3d/decorated_ring.glb';

export function RingModel(props) {
  const { nodes, materials } = useGLTF(decorated_ring);
  const groupRef = useRef();

  // Define the animation using react-spring
  const { positionX, positionZ, scale, rotationY, rotationX, rotationZ } = useSpring({
    from: {
      positionX: props.animate?.initial?.positionX || 10,
      positionZ: -20,
      scale: props.scale || 0.1,
      rotationY: Math.PI * 2,
      rotationX: Math.PI,
      rotationZ: 0,
    },
    to: async (next) => {
      await next({
        positionX: props.animate?.final?.positionX || 0,
        positionZ: 0,
        scale: props.scale || 1,
        rotationY: Math.PI * 2,
        rotationX: props.rotationX || -Math.PI / 4,
        rotationZ: props.rotationZ || -Math.PI / 6,
      }, 2000);
      await next({ scale: props.scale || 1.1 }); // Slight bump
      await next({ scale: props.scale || 1 }); // Settle at the final size
    },
    config: { tension: 120, friction: 14, duration: 2000 },
    delay: 200,
  });

  // Rotate the ring continuously after reaching its final position
  useFrame(() => {
    groupRef.current.rotation.y += 0.01 * props.spinDirection; // Rotate based on spinDirection prop
    groupRef.current.rotation.x += 0.01 * props.spinDirection; // Rotate based on spinDirection prop
  });

  return (
    <animated.group
      ref={groupRef}
      position-x={positionX}
      position-z={positionZ}
      scale={scale}
      rotation-y={rotationY}
      rotation-x={rotationX}
      rotation-z={rotationZ}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.DefaultMaterial}
      />
    </animated.group>
  );
}

useGLTF.preload(decorated_ring);







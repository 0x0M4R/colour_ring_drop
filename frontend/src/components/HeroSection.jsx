// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { RingModel } from './'; // Import the Model component

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <Canvas style={{ height: '100vh', width: '100%' }}>
//         <OrbitControls enableDamping={false} />
//         <hemisphereLight intensity={1} groundColor='yellow' />
//         <pointLight position={[4, 4, 5]} intensity={1} />
//         <pointLight position={[1, 4, 2]} intensity={40} />
//         <pointLight position={[1, -4, 2]} intensity={40} />
//         <directionalLight
//           intensity={3}
//           position={[15, -4, 1]} // Position of the light source
//         />
//         <spotLight
//           position={[20, 50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//           castShadow
//           shadow-mapSize={1024}
//         />
//         <spotLight
//           position={[-20, -50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//         />
//         <ambientLight intensity={0.5} />
//         <RingModel />
//       </Canvas>
//     </section>
//   );
// };

// export default HeroSection;









//!!
//!!
//!!
// import React, { useState, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { RingModel } from './'; // Import the RingModel component

// const HeroSection = () => {
//   const [ringPositions, setRingPositions] = useState({ left: -4, right: 4 });

//   // Update positions based on screen width
//   useEffect(() => {
//     const updatePositions = () => {
//       const width = window.innerWidth;
//       if (width < 768) { // Small screens
//         setRingPositions({ left: -2, right: 2 });
//       } else if (width < 1024) { // Medium screens
//         setRingPositions({ left: -3, right: 3 });
//       } else { // Large screens
//         setRingPositions({ left: -4, right: 4 });
//       }
//     };

//     // Initial position update
//     updatePositions();

//     // Update positions on resize
//     window.addEventListener('resize', updatePositions);
//     return () => window.removeEventListener('resize', updatePositions);
//   }, []);

//   return (
//     <section className="hero-section">
//       <Canvas style={{ height: '100vh', width: '100%' }}>
//         <OrbitControls enableDamping={false} />
//         <hemisphereLight intensity={1} groundColor='yellow' />
//         <pointLight position={[4, 4, 5]} intensity={1} />
//         <pointLight position={[1, 4, 2]} intensity={40} />
//         <pointLight position={[1, -4, 2]} intensity={40} />
//         <directionalLight
//           intensity={3}
//           position={[15, -4, 1]} // Position of the light source
//         />
//         <spotLight
//           position={[20, 50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//           castShadow
//           shadow-mapSize={1024}
//         />
//         <spotLight
//           position={[-20, -50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//         />
//         <ambientLight intensity={0.5} />
//         {/* Main Middle Ring */}
//         <RingModel
//           position={[0, 0, 0]}
//           scale={[1, 1, 1]}
//           rotation={[0, 0, 0]}
//           spinDirection={1} // Spin direction: 1 for clockwise
//         />
//         {/* Smaller Left Ring */}
//         <RingModel
//           position={[ringPositions.left, 0, -10]} // Position to the left of the main ring
//           scale={[0.5, 0.5, 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1} // Spin direction: -1 for counter-clockwise
//           animate={{ initial: { positionX: -10 }, final: { positionX: ringPositions.left } }} // Independent movement
//         />
//         {/* Smaller Right Ring */}
//         <RingModel
//           position={[ringPositions.right, 0, -10]} // Position to the right of the main ring
//           scale={[0.5, 0.5, 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1} // Spin direction: -1 for counter-clockwise
//           animate={{ initial: { positionX: 10 }, final: { positionX: ringPositions.right } }} // Independent movement
//         />
//       </Canvas>
//     </section>
//   );
// };

// export default HeroSection;


//!!
//!!
//!!


// import React, { useState, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { RingModel } from './'; // Import the RingModel component

// const HeroSection = () => {
//   const [ringScale, setRingScale] = useState(1); // Initial ring scale
//   const [ringPositions, setRingPositions] = useState({ left: -2, right: 2, top: 0, bottom: 0 }); // Initial ring positions

//   // Update ring scale and positions based on screen width
//   useEffect(() => {
//     const updateRings = () => {
//       const width = window.innerWidth;
//       if (width < 768) { // Small screens
//         setRingScale(0.7);
//         setRingPositions({ left: 0, right: 0, top: -1.5, bottom: 1.5 }); // Move rings up and down
//       } else if (width < 1024) { // Medium screens
//         setRingScale(0.8);
//         setRingPositions({ left: -1.5, right: 1.5, top: 0, bottom: 0 }); // Keep rings on sides
//       } else { // Large screens
//         setRingScale(1);
//         setRingPositions({ left: -2, right: 2, top: 0, bottom: 0 }); // Keep rings on sides
//       }
//     };

//     // Initial ring update
//     updateRings();

//     // Update rings on resize
//     window.addEventListener('resize', updateRings);
//     return () => window.removeEventListener('resize', updateRings);
//   }, []);

//   return (
//     <section className="hero-section">
//       <Canvas style={{ height: '100vh', width: '100%' }}>
//         <OrbitControls enableDamping={false} />
//         <hemisphereLight intensity={1} groundColor='yellow' />
//         <pointLight position={[4, 4, 5]} intensity={1} />
//         <pointLight position={[1, 4, 2]} intensity={40} />
//         <pointLight position={[1, -4, 2]} intensity={40} />
//         <directionalLight
//           intensity={3}
//           position={[15, -4, 1]} // Position of the light source
//         />
//         <spotLight
//           position={[20, 50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//           castShadow
//           shadow-mapSize={1024}
//         />
//         <spotLight
//           position={[-20, -50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//         />
//         <ambientLight intensity={0.5} />
//         {/* Main Middle Ring */}
//         <RingModel
//           position={[0, 0, 0]}
//           scale={[ringScale, ringScale, ringScale]}
//           rotation={[0, 0, 0]}
//           spinDirection={1.3} // Spin direction: 1 for clockwise
//         />
//         {/* Smaller Left/Top Ring */}
//         <RingModel
//           position={[ringPositions.left, ringPositions.top, -5]} // Position based on screen width
//           scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1} // Spin direction: -1 for counter-clockwise
//           animate={{ initial: { positionX: -5, positionY: 0 }, final: { positionX: ringPositions.left, positionY: ringPositions.top } }} // Independent movement
//         />
//         {/* Smaller Right/Bottom Ring */}
//         <RingModel
//           position={[ringPositions.right, ringPositions.bottom, -5]} // Position based on screen width
//           scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1.2} // Spin direction: -1 for counter-clockwise
//           animate={{ initial: { positionX: 5, positionY: 0 }, final: { positionX: ringPositions.right, positionY: ringPositions.bottom } }} // Independent movement
//         />
//       </Canvas>
//     </section>
//   );
// };

// export default HeroSection;



//!
//!
//!
//!


// import React, { useState, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { RingModel } from './'; // Import the RingModel component

// const HeroSection = () => {
//   const [ringScale, setRingScale] = useState(1); // Initial ring scale
//   const [ringPositions, setRingPositions] = useState({
//     left: -2,
//     right: 2,
//     top: 0,
//     bottom: 0,
//     leftSmall: -3,
//     rightSmall: 3,
//     leftSmaller: -3.5,
//     rightSmaller: 3.5,
//   }); // Initial ring positions

//   // Update ring scale and positions based on screen width
//   useEffect(() => {
//     const updateRings = () => {
//       const width = window.innerWidth;
//       if (width < 768) { // Small screens
//         setRingScale(0.7);
//         setRingPositions({
//           left: 0,
//           right: 0,
//           top: -1.5,
//           bottom: 1.5,
//           leftSmall: 0,
//           rightSmall: 0,
//           leftSmaller: 0,
//           rightSmaller: 0,
//         }); // Move rings up and down
//       } else if (width < 1024) { // Medium screens
//         setRingScale(0.8);
//         setRingPositions({
//           left: -1.5,
//           right: 1.5,
//           top: 0,
//           bottom: 0,
//           leftSmall: -2,
//           rightSmall: 2,
//           leftSmaller: -2.5,
//           rightSmaller: 2.5,
//         }); // Keep rings on sides
//       } else if (width < 1280) { // Large screens
//         setRingScale(1);
//         setRingPositions({
//           left: -2,
//           right: 2,
//           top: 0,
//           bottom: 0,
//           leftSmall: -2.5,
//           rightSmall: 2.5,
//           leftSmaller: -3,
//           rightSmaller: 3,
//         }); // Keep rings on sides
//       } else { // Very large screens
//         setRingScale(1.2);
//         setRingPositions({
//           left: -2.5,
//           right: 2.5,
//           top: 0,
//           bottom: 0,
//           leftSmall: -3,
//           rightSmall: 3,
//           leftSmaller: -3.5,
//           rightSmaller: 3.5,
//         }); // Add two more smaller rings
//       }
//     };

//     // Initial ring update
//     updateRings();

//     // Update rings on resize
//     window.addEventListener('resize', updateRings);
//     return () => window.removeEventListener('resize', updateRings);
//   }, []);

//   return (
//     <section className="hero-section">
//       <Canvas style={{ height: '100vh', width: '100%' }}>
//         <OrbitControls enableDamping={false} />
//         <hemisphereLight intensity={1} groundColor='yellow' />
//         <pointLight position={[4, 4, 5]} intensity={1} />
//         <pointLight position={[1, 4, 2]} intensity={40} />
//         <pointLight position={[1, -4, 2]} intensity={40} />
//         <directionalLight
//           intensity={3}
//           position={[15, -4, 1]} // Position of the light source
//         />
//         <spotLight
//           position={[20, 50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//           castShadow
//           shadow-mapSize={1024}
//         />
//         <spotLight
//           position={[-20, -50, 10]}
//           angle={0.3}
//           penumbra={1}
//           intensity={500}
//         />
//         <ambientLight intensity={0.5} />
//         {/* Main Middle Ring */}
//         <RingModel
//           position={[0, 0, 0]}
//           scale={[ringScale, ringScale, ringScale]}
//           rotation={[0, 0, 0]}
//           spinDirection={1.3} // Spin direction: 1 for clockwise
//         />
//         {/* Smaller Left/Top Ring */}
//         <RingModel
//           position={[ringPositions.left, ringPositions.top, -5]} // Position based on screen width
//           scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1} // Spin direction: -1 for counter
//         />
//         <RingModel
//           position={[ringPositions.left, ringPositions.top, -5]} // Position based on screen width
//           scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1} // Spin direction: -1 for counter-clockwise
//           animate={{ initial: { positionX: -5, positionY: 0 }, final: { positionX: ringPositions.left, positionY: ringPositions.top } }} // Independent movement
//         />
//         {/* Smaller Right/Bottom Ring */}
//         <RingModel
//           position={[ringPositions.right, ringPositions.bottom, -5]} // Position based on screen width
//           scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
//           rotation={[0, 0, 0]}
//           spinDirection={-1.2} // Spin direction: -1 for counter-clockwise
//           animate={{ initial: { positionX: 5, positionY: 0 }, final: { positionX: ringPositions.right, positionY: ringPositions.bottom } }} // Independent movement
//         />
//         {/* Even Smaller Left/Top Ring (only for very large screens) */}
//         {window.innerWidth > 1280 && (
//           <RingModel
//             position={[ringPositions.leftSmaller, ringPositions.top, -5]} // Position based on screen width
//             scale={[ringScale * 0.3, ringScale * 0.3, ringScale * 0.3]} // Even smaller size
//             rotation={[0, 0, 0]}
//             spinDirection={-1.5} // Spin direction: -1 for counter-clockwise
//             animate={{ initial: { positionX: -5, positionY: 0 }, final: { positionX: ringPositions.leftSmaller, positionY: ringPositions.top } }} // Independent movement
//           />
//         )}
//         {/* Even Smaller Right/Bottom Ring (only for very large screens) */}
//         {window.innerWidth > 1280 && (
//           <RingModel
//             position={[ringPositions.rightSmaller, ringPositions.bottom, -5]} // Position based on screen width
//             scale={[ringScale * 0.3, ringScale * 0.3, ringScale * 0.3]} // Even smaller size
//             rotation={[0, 0, 0]}
//             spinDirection={-1.8} // Spin direction: -1 for counter-clockwise
//             animate={{ initial: { positionX: 5, positionY: 0 }, final: { positionX: ringPositions.rightSmaller, positionY: ringPositions.bottom } }} // Independent movement
//           />
//         )}
//       </Canvas>
//     </section>
//   );
// };

// export default HeroSection;


//!noice ed
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RingModel } from './'; // Import the RingModel component

const HeroSection = () => {
  const [ringScale, setRingScale] = useState(1); // Initial ring scale
  const [ringPositions, setRingPositions] = useState({
    left: -2,
    right: 2,
    top: 0,
    bottom: 0,
    leftSmall: -1.5,
    rightSmall: 1.5,
    leftSmaller: -3,
    rightSmaller: 3,
  }); // Initial ring positions


  // Update ring scale and positions based on screen width
  useEffect(() => {
    const updateRings = () => {
      const width = window.innerWidth;
      if (width < 768) { // Small screens
        setRingScale(0.7);
        setRingPositions({
          left: 0,
          right: 0,
          top: -1.5,
          bottom: 1.5,
          leftSmall: 0,
          rightSmall: 0,
          leftSmaller: 0,
          rightSmaller: 0,
        }); // Move rings up and down
      } else if (width < 1024) { // Medium screens
        setRingScale(0.8);
        setRingPositions({
          left: -1.2,
          right: 1.2,
          top: 0,
          bottom: 0,
          leftSmall: -1.8,
          rightSmall: 1.8,
          leftSmaller: -2.8,
          rightSmaller: 2.8,
        }); // Keep rings on sides
      } else if (width < 1280) { // Large screens
        setRingScale(1);
        setRingPositions({
          left: -1.5,
          right: 1.5,
          top: 0,
          bottom: 0,
          leftSmall: -2,
          rightSmall: 2,
          leftSmaller: -3.2,
          rightSmaller: 3.2,
        }); // Keep rings on sides
      } else { // Very large screens
        setRingScale(1.2);
        setRingPositions({
          left: -1.8,
          right: 1.8,
          top: 0,
          bottom: 0,
          leftSmall: -2.2,
          rightSmall: 2.2,
          leftSmaller: -3.5,
          rightSmaller: 3.5,
        }); // Add two more smaller rings
      }
    };

    // Initial ring update
    updateRings();

    // Update rings on resize
    window.addEventListener('resize', updateRings);
    return () => window.removeEventListener('resize', updateRings);
  }, []);

  return (
    <section className="hero-section">
      <Canvas style={{  /* pointerEvents: 'none',  */height: '100vh', width: '100%' }}>
        <OrbitControls enableDamping={false} />
        <hemisphereLight intensity={1} groundColor='yellow' />
        <pointLight position={[4, 4, 5]} intensity={1} />
        <pointLight position={[1, 4, 2]} intensity={40} />
        <pointLight position={[1, -4, 2]} intensity={40} />
        <directionalLight
          intensity={3}
          position={[15, -4, 1]} // Position of the light source
        />
        <spotLight
          position={[20, 50, 10]}
          angle={0.3}
          penumbra={1}
          intensity={500}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[-20, -50, 10]}
          angle={0.3}
          penumbra={1}
          intensity={500}
        />
        <ambientLight intensity={0.5} />
        {/* Main Middle Ring */}
        <RingModel
          position={[0, 0, 0]}
          scale={[ringScale, ringScale, ringScale]}
          rotation={[0, 0, 0]}
          spinDirection={1.3} // Spin direction: 1 for clockwise
        />
        {/* Smaller Left/Top Ring */}
        <RingModel
          position={[ringPositions.leftSmall, ringPositions.top, -5]} // Position based on screen width
          scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
          rotation={[0, 0, 0]}
          spinDirection={-1.2} // Spin direction: -1 for counter-clockwise
          animate={{ initial: { positionX: -5, positionY: 0 }, final: { positionX: ringPositions.leftSmall, positionY: ringPositions.top } }} // Independent movement
        />
        {/* Smaller Right/Bottom Ring */}
        <RingModel
          position={[ringPositions.rightSmall, ringPositions.bottom, -5]} // Position based on screen width
          scale={[ringScale * 0.5, ringScale * 0.5, ringScale * 0.5]} // Smaller size
          rotation={[0, 0, 0]}
          spinDirection={-1.5} // Spin direction: -1 for counter-clockwise
          animate={{ initial: { positionX: 5, positionY: 0 }, final: { positionX: ringPositions.rightSmall, positionY: ringPositions.bottom } }} // Independent movement
        />
        {/* Even Smaller Left/Top Ring (only for very large screens) */}
        {window.innerWidth > 1280 && (
          <RingModel
            position={[ringPositions.leftSmaller, ringPositions.top, -5]} // Position based on screen width
            scale={[ringScale * 0.3, ringScale * 0.3, ringScale * 0.3]} // Even smaller size
            rotation={[0, 0, 0]}
            spinDirection={-1.8} // Spin direction: -1 for counter-clockwise
            animate={{ initial: { positionX: -5, positionY: 0 }, final: { positionX: ringPositions.leftSmaller, positionY: ringPositions.top } }} // Independent movement
          />
        )}
        {/* Even Smaller Right/Bottom Ring (only for very large screens) */}
        {window.innerWidth > 1280 && (
          <RingModel
            position={[ringPositions.rightSmaller, ringPositions.bottom, -5]} // Position based on screen width
            scale={[ringScale * 0.3, ringScale * 0.3, ringScale * 0.3]} // Even smaller size
            rotation={[0, 0, 0]}
            spinDirection={-2.1} // Spin direction: -1 for counter-clockwise
            animate={{ initial: { positionX: 5, positionY: 0 }, final: { positionX: ringPositions.rightSmaller, positionY: ringPositions.bottom } }} // Independent movement
          />
        )}
      </Canvas>
    </section>
  );
};

export default HeroSection;
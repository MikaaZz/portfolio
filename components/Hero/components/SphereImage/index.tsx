import React from 'react';

import { Box } from '@mui/material';

import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

import homePageImage from '../../../../assets/homePageImage.png';
import Image from 'next/image';

function SphereImage() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        width: '50%',
      }}
    >
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={4}>
          <MeshDistortMaterial
            color={'#220736'}
            attach={'material'}
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
      <Image src={homePageImage} alt={''} />
    </Box>
  );
}
export default SphereImage
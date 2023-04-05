import React from 'react';

import { Box } from '@mui/material';

import Text from './components/Text';
import SphereImage from './components/SphereImage';

function Hero() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Text />
      <SphereImage />
    </Box>
  );
}
export default Hero;

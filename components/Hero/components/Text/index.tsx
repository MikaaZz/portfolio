import React from 'react';

import Link from 'next/link';

import { Box, Typography } from '@mui/material';

function Text() {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
      }}
    >
      <Typography component={'h1'} sx={{ fontSize: '56px', fontWeight: '500' }}>
        Mikhael <br /> Zimmermann
      </Typography>
      <Typography
        component={'p'}
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      >
        Hello, I&apos;m Mikhael Zimmermann, a front-end software engineer with 2
        years of experience. I have a strong proficiency in technologies such as
        JavaScript, React, and Node.js, and am skilled in software architecture,
        software design patterns (MVC), and testing. I have worked on various
        projects using frameworks such as Next.js and Ruby on Rails, and have
        experience with relational databases and SQL. Additionally, I have
        knowledge of tools such as Docker, Redux, and Firebase, and am always
        looking to learn and grow in my field. Check out my portfolio to see
        some of the projects I&apos;ve worked on, and feel free to{' '}
        <Link href={''} style={{ textDecoration: 'underline' }}>
          contact me
        </Link>{' '}
        for any inquiries or feedback.
      </Typography>
    </Box>
  );
}
export default Text;

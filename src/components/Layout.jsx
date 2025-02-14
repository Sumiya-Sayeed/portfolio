import React, { useState } from 'react';
import { Fab, Grid, Link, Typography, useTheme } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import Appbar from './appbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Achievements from './Achivements';

const Layout = () => {
  document.title = 'Sumiya Sayeed';
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <Appbar />
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        justify='center'
        sx={{
          margin: '0px auto',
          height: '100%'
        }}
      >
        {window.pageYOffset > 0 && (
          <Fab
            sx={{
              margin: 0,
              top: 'auto',
              right: 40,
              bottom: 40,
              left: 'auto',
              position: 'fixed',
              display: visible ? 'inline' : 'none',
              backgroundColor: 'white',
              color: theme.palette.primary.main,
              ':hover': {
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
              }
            }}
            onClick={scrollToTop}
          >
            <ArrowUpward
              sx={{
                marginTop: '7px',
                ':hover': {
                  height: '1.2em',
                  width: '1.2em'
                }
              }}
            />
          </Fab>
        )}
        <Intro id='Intro' />
        <Skills id='Skills' />
        <Projects id='Projects' />
        <Experience id='Experience' />
        <Education id='Education' />
        <Achievements id='Achievements' />
        <Typography gutterBottom color={theme.palette.primary.main}>
          Made by{' '}
          <Link
            underline='hover'
            href='https://www.linkedin.com/in/sumiya-sayeed-04a9319b/'
          >
            Sumiya Sayeed
          </Link>
        </Typography>
      </Grid>
    </>
  );
};

export default Layout;

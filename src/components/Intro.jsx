import React from 'react';
import {
  Grid,
  Paper,
  SvgIcon,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SumiyaSayeed from '../assets/SumiyaSayeed.jpeg';
import logos from '../assets/ProfileLogos';

const useStyles = makeStyles((theme) => ({
  div: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 0)
    }
  }
}));

const Intro = ({ id }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      md={8}
      id={id}
      sx={{
        marginTop: 12,
        minHeight: 300,
        height: 'auto',
        width: '100%',
        [theme.breakpoints.down('md')]: {
          marginTop: 10
        }
      }}
    >
      <Paper
        sx={{
          backgroundColor: theme.palette.background.paper, // Use paper background color from theme
          boxShadow: theme.shadows[5], // Use theme shadow for consistency
          width: '80%',
          margin: '0px auto',
          [theme.breakpoints.down('md')]: {
            width: '95%',
            padding: 1
          },
          padding: 2,
          minHeight: 300,
          height: 'auto'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            minHeight: 300,
            height: 'auto'
          }}
        >
          <Grid
            item
            sm={12}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              margin: 'auto'
            }}
          >
            <img
              src={SumiyaSayeed}
              alt='SumiyaSayeed'
              width={220}
              height={220}
              style={{
                objectFit: 'cover',
                borderRadius: 10,
                border: `2px solid ${theme.palette.primary.main}` // Add border for better visibility
              }}
            />
            <Typography
              variant='h6'
              sx={{
                color: theme.palette.text.primary, // Use primary text color from theme
                padding: theme.spacing(1, 0, 0, 0)
              }}
            >
              Sumiya Sayeed
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: theme.palette.text.secondary, // Use secondary text color from theme
                padding: theme.spacing(0, 0, 1, 0)
              }}
            >
              Software Engineer
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={8}
            sx={{
              height: 'auto',
              margin: 'auto',
              padding: 2,
              color: theme.palette.text.secondary // Use secondary text color from theme
            }}
          >
            <Typography variant='body2'>
              I am a passionate and skilled frontend developer with a deep
              enthusiasm for building user-friendly, high-quality web
              applications. My expertise extends beyond frontend development to
              full-stack engineering, DevOps, and emerging fields like AI and
              data science, allowing me to approach projects from a holistic
              perspective. With a strong foundation in responsive and
              pixel-perfect design, I specialize in creating scalable
              applications that seamlessly integrate cutting-edge technologies.
              <br />
              <br />
              Beyond development, I am an avid competitive programmer, having
              solved over 800 challenges on platforms like CodeForces, AtCoder,
              UVa, Toph, and HackerRank. This experience has honed my critical
              thinking and problem-solving skills, making me a more effective
              and resourceful developer.
              <br />
              <br />
              My curiosity extends to cognitive science and psychology, fields
              that inspire my belief in the intersection of technology and human
              behavior. Books like The Brain: The Story of You by David Eagleman
              and Emotional Intelligence by Daniel Goleman, along with podcasts
              from experts like Neil deGrasse Tyson and Dr. Andrew Huberman,
              have significantly shaped my perspective. I am constantly
              exploring how insights from neuroscience and psychology can
              influence AI development and cognitive computing.
              <br />
              <br />
              Driven by a relentless thirst for learning, I am always eager to
              push boundaries, solve complex challenges, and contribute to
              impactful projects that bridge technology and human understanding.
            </Typography>
            <div className={classes.div}>
              {logos.map((i, index) => (
                <IconButton
                  key={index}
                  href={i.href}
                  sx={{
                    color: theme.palette.primary.main // Use primary color for icons
                  }}
                >
                  <SvgIcon>
                    <svg xmlns={i.xmlns} viewBox={i.viewbox}>
                      <path d={i.d} />
                    </svg>
                  </SvgIcon>
                </IconButton>
              ))}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Intro;

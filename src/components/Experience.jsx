import React from 'react';
import {
  Stack,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
  Link
} from '@mui/material';
import Experience from '../assets/Experience.png';
import { experiences } from '../assets/Experiences';

const Experiences = ({ id }) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      md={8}
      id={id}
      sx={{
        marginTop: 12,
        minHeight: 200,
        height: 'auto',
        width: '100%',
        [theme.breakpoints.down('md')]: {
          marginTop: 10
        }
      }}
    >
      <Paper
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          width: '80%',
          margin: '0px auto',
          [theme.breakpoints.down('md')]: {
            width: '95%',
            padding: 1
          },
          padding: 4,
          minHeight: 200,
          height: 'auto'
        }}
      >
        {/* Changed Stack to column to encapsulate the Title and then the content */}
        <Stack direction='column' spacing={2} sx={{ minHeight: 200, height: 'auto' }}>

          {/* Title Section - Modified to match Skills/Projects layout */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column', // Changed to column
              justifyContent: 'flex-start'
            }}
          >
            <Typography
              variant='h6'
              color={theme.palette.text.primary}
              component='span' // Added component='span' for consistency
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem'
                }
              }}
            >
              <img
                src={Experience}
                alt={`<a href="https://www.flaticon.com/free-icons/worker" title="worker icons">Worker icons created by Freepik - Flaticon</a>`}
                height={50}
                width={50}
                style={{
                  verticalAlign: 'middle',
                  paddingRight: 8 // Increased padding for consistency
                }}
              />
              Experience
            </Typography>
            <Divider sx={{ my: 2 }} /> {/* Moved Divider outside Typography */}
          </div>

          {/* Main content area, now using a Stack for horizontal layout with divider */}
          <Stack
            direction={{ xs: 'column', md: 'row' }} // Make it column on small screens, row on medium and up
            divider={
              <Divider
                orientation='vertical'
                flexItem
                sx={{
                  backgroundColor: theme.palette.divider,
                  display: { xs: 'none', md: 'block' } // Hide vertical divider on small screens
                }}
              />
            }
            spacing={2}
            sx={{
              height: 'auto',
              justifyContent: 'center', // Center content when it's a row
              alignItems: 'flex-start', // Align items to the start for better list appearance
            }}
          >
            {/* The left section (empty in your original, but conceptually for the title if it were separate) */}
            {/* Keeping it for structure, but its content will now be part of the main title above */}
            {/* You can remove this empty div if you only want the "Experiences" content */}
            {/* For now, I'll remove the original title div to avoid duplication and use the new one */}
            {/* I'm going to assume you want the title section *above* the list of experiences. */}

            {/* This div will hold the actual experience entries */}
            <div style={{ flexGrow: 1 }}> {/* Allow this div to take available space */}
              {experiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <Typography variant='h6' color={theme.palette.text.primary}>
                    {exp.role}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color={theme.palette.text.secondary}
                  >
                    <Link
                      href={exp.companyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      color='inherit'
                      sx={{ textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {exp.company}
                    </Link>
                    {' '} ({exp.duration}) {/* Added space here */}
                  </Typography>
                  <ul>
                    {exp.responsibilities.map((task, idx) => (
                      <li key={idx}>
                        <Typography
                          sx={{ lineHeight: 1.5 }} // Adjusted line height for better readability
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          {task}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Experiences;
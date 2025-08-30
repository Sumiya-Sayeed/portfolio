import React from 'react';
import {
  Stack,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
  Link
} from '@mui/material';
import { VscAzure } from 'react-icons/vsc'; // Make sure this icon is used if needed or remove if not
import Project from '../assets/Projects.png';
import { projects } from '../assets/Projects';

const Projects = ({ id }) => {
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
          padding: 2,
          minHeight: 200,
          height: 'auto'
        }}
      >
        <Stack
          direction='column'
          spacing={2}
          sx={{
            minHeight: 200,
            height: 'auto'
          }}
        >
          {/* Title Section - Modified to match Skills component */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column', // Changed to column
              justifyContent: 'flex-start'
            }}
          >
            <Typography
              variant='h6'
              // align='center' // Removed align as it was causing an issue with image
              color={theme.palette.text.primary}
              component='span' // Added component='span' for consistency with Skills
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem'
                }
              }}
            >
              <img
                src={Project}
                alt={`<a href="https://www.flaticon.com/free-icons/project" title="project icons">Project icons created by afitrose - Flaticon</a>`}
                height={50}
                width={50}
                style={{
                  verticalAlign: 'middle',
                  paddingRight: 8 // Increased padding for consistency
                }}
              />
              Projects
            </Typography>
            <Divider sx={{ my: 2 }} /> {/* Moved Divider outside Typography */}
          </div>

          {/* Projects Section */}
          <div>
            {projects.map((project, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <Typography
                  gutterBottom
                  variant='h6'
                  color={theme.palette.text.primary}
                >
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    color='inherit'
                    sx={{ textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    {project.name}
                  </Link>
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color={theme.palette.text.secondary}
                  sx={{ padding: theme.spacing(1, 0) }} // Added padding for better spacing
                >
                  Technologies Used:
                </Typography>
                <Stack
                  direction='row'
                  spacing={1}
                  flexWrap='wrap'
                  useFlexGap // Ensures wrapping elements maintain spacing
                >
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      icon={tech.icon || null}
                      label={tech.label}
                      sx={{
                        padding: 1,
                        margin: 1, // Chip margins will also help with spacing
                        backgroundColor: theme.palette.primary.dark,
                        '& .MuiChip-icon': {
                          color: theme.palette.secondary.main
                        },
                        '& .MuiChip-label': {
                          color: theme.palette.secondary.main
                        }
                      }}
                    />
                  ))}
                </Stack>
              </div>
            ))}
          </div>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Projects;
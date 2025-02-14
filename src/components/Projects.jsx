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
import { VscAzure } from 'react-icons/vsc';
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
          direction='row'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={2}
          sx={{
            minHeight: 200,
            height: 'auto'
          }}
        >
          {/* Title Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.primary}
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
                  paddingRight: 1
                }}
              />
              <br />
              Projects
            </Typography>
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
                >
                  Technologies Used:
                </Typography>
                <Stack direction='row' spacing={1} flexWrap='wrap'>
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      icon={tech.icon || null}
                      label={tech.label}
                      sx={{
                        padding: 1,
                        margin: 1,
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

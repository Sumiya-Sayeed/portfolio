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
          padding: 2,
          minHeight: 200,
          height: 'auto'
        }}
      >
        <Stack
          direction='row'
          divider={
            <Divider
              orientation='vertical'
              flexItem
              sx={{ backgroundColor: theme.palette.divider }}
            />
          }
          spacing={2}
          sx={{
            minHeight: 200,
            height: 'auto'
          }}
        >
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
                src={Experience}
                alt={`<a href="https://www.flaticon.com/free-icons/worker" title="worker icons">Worker icons created by Freepik - Flaticon</a>`}
                height={50}
                width={50}
                style={{
                  verticalAlign: 'middle',
                  paddingRight: 1
                }}
              />
              <br />
              Experience
            </Typography>
          </div>
          <div>
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
                  ({exp.duration})
                </Typography>
                <ul>
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx}>
                      <Typography
                        sx={{ lineHeight: 2 }} // Increased line height
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
      </Paper>
    </Grid>
  );
};

export default Experiences;

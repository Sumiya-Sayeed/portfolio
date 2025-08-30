import React from 'react';
import {
  Stack,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import Education from '../assets/Education.png';
import { educations } from '../assets/Educations';

const Educations = ({ id }) => {
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
        <Stack direction="column" spacing={2} sx={{ minHeight: 200, height: 'auto' }}>
          {/* Title Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <Typography
              variant='h6'
              color={theme.palette.text.primary}
              component='span'
              sx={{
                display: 'flex',
                alignItems: 'center',
                [theme.breakpoints.down('sm')]: { fontSize: '1rem' }
              }}
            >
              <img
                src={Education}
                alt="Education icons created by Freepik - Flaticon"
                height={50}
                width={50}
                style={{ verticalAlign: 'middle', paddingRight: 8 }}
              />
              Education
            </Typography>
            <Divider sx={{ my: 2 }} />
          </div>

          {/* Vertical list of education entries */}
          <Stack direction="column" spacing={3} sx={{ height: 'auto' }}>
            {educations.map((edu, index) => (
              <div key={index}>
                <Typography variant='subtitle1' color={theme.palette.text.primary} sx={{ mb: 1 }}>
                  {edu.degree}
                </Typography>
                <Typography variant='subtitle1' color={theme.palette.text.secondary} sx={{ mb: 0.5 }}>
                  {edu.university}
                </Typography>
                <Typography variant='subtitle1' color={theme.palette.text.secondary} sx={{ mb: 0.5 }}>
                  ({edu.duration})
                </Typography>
                {edu.cgpa && (
                  <Typography variant='subtitle1' color={theme.palette.text.secondary}>
                    CGPA: {edu.cgpa}
                  </Typography>
                )}
                {/* {index < educations.length - 1 && <Divider sx={{ my: 2 }} />} */}
              </div>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Educations;

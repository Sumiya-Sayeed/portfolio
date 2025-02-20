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
          backgroundColor: theme.palette.background.paper, // Use paper background color from theme
          boxShadow: theme.shadows[5], // Use theme shadow for consistency
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
              color={theme.palette.text.primary} // Use primary text color from theme
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem'
                }
              }}
            >
              <img
                src={Education}
                alt={`<a href="https://www.flaticon.com/free-icons/education" title="education icons">Education icons created by Freepik - Flaticon</a>`}
                height={50}
                width={50}
                style={{
                  verticalAlign: 'middle',
                  paddingRight: 1
                }}
              />
              <br />
              Education
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant='h6'
              color={theme.palette.text.primary} // Use primary text color from theme
            >
              {`Bachelor of Science in Computer Science and Engineering`}
            </Typography>
            <Typography
              variant='subtitle1'
              color={theme.palette.text.secondary} // Use secondary text color from theme
            >
              {`Stamford University Bangladesh (Graduated in 2017)`}
            </Typography>
            <Typography
              variant='subtitle1'
              color={theme.palette.text.secondary} // Use secondary text color from theme
            >
              {`CGPA: 3.96/4.00`}
            </Typography>
          </div>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Educations;

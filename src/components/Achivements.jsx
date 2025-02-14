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
import Achievement from '../assets/Achievement.png';
import { achievements } from '../assets/Achievements';

const Achievements = ({ id }) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      md={8}
      id={id}
      sx={{
        marginTop: 12,
        marginBottom: 12,
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
                src={Achievement}
                alt={`<a href="https://www.flaticon.com/free-icons/trophy" title="trophy icons">Trophy icons created by Freepik - Flaticon</a>`}
                height={50}
                width={50}
                style={{
                  verticalAlign: 'middle',
                  paddingRight: 1
                }}
              />
              <br />
              Achievements
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>
                  <Typography
                    sx={{ lineHeight: 2 }} // Increased line height
                    variant='body2'
                    color={theme.palette.text.secondary}
                  >
                    {achievement.url ? (
                      <Link
                        href={achievement.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        color='inherit'
                        sx={{ textDecoration: 'none', fontWeight: 'bold' }}
                      >
                        {achievement.text}
                      </Link>
                    ) : (
                      achievement.text
                    )}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Achievements;

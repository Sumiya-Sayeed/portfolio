import React from 'react';
import {
  Stack,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import Skill from '../assets/Skills.png'; // Ensure the image path is correct
import { skills } from '../assets/Skills';
import { LiaCriticalRole } from 'react-icons/lia';

const Skills = ({ id }) => {
  const theme = useTheme();

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
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
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
        <Stack
          direction='row'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={2}
          sx={{ minHeight: 300, height: 'auto' }}
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
              component='span'
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem'
                }
              }}
            >
              <img
                src={Skill}
                alt='<a href="https://www.flaticon.com/free-icons/skill" title="skill icons">Skill icons created by Eucalyp - Flaticon</a>'
                height={50}
                width={50}
                style={{ verticalAlign: 'middle', paddingRight: 8 }}
              />
              <br />
              Skills
            </Typography>
          </div>

          {/* Skills Section */}
          <div>
            {skills.map((skillCategory, index) => (
              <div key={index}>
                <Typography
                  variant='body2'
                  color={theme.palette.text.secondary}
                  component='span'
                  sx={{ padding: 2, display: 'block' }}
                >
                  <strong>{skillCategory.label}</strong>
                </Typography>
                {skillCategory.data.map((skill, index1) => (
                  <Chip
                    key={index1}
                    icon={skill.icon || <LiaCriticalRole />}
                    label={skill.label}
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
              </div>
            ))}
          </div>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Skills;

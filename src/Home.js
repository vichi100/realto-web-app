import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Image from 'material-ui-image'; 
import rgb from "./rbg.jpeg";
import logo from "./logo.png";
// import logo from './flicksick.png';
import appstore from './appstore.png';
import playstore from './playstore.png';

// const useStyles = makeStyles((theme) => ({
// 	text: {
// 		color: '#ffffff'
// 	}
// }));

const theme = createMuiTheme({
  // spacing: 60,
  palette: {
    type: 'dark',
    primary: { main: '#e91e63' },
    secondary: { main: '#0277bd' },
    text: {
      // primary: '#0277bd',
      secondary: '#0277bd',
      disabled: '#0277bd',
      hint: '#0277bd'
    }
  },
  overrides: {
    MuiTypography: {
      body2: {
        // fontSize: [ 12, '!important' ],
        // fontWeight: 600
      }
    }
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://realtoapp.com">
        Realto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    // margin: theme.spacing(1),
    height: 200,
    width: 200
    // backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  text: {
    color: '#48D1CC',
    fontSize: [12, '!important'],
    fontWeight: 600
  },
  head: {
    // color: '#00FFFF',

    color: '#ffffff',
    fontSize: [40, '!important'],
    fontWeight: 600
  },
  subTitle: {
    color: '#D3D3D3',
    fontSize: [14, '!important'],
    fontWeight: 600
  },

  support: {
    color: '#D3D3D3',
    fontSize: [14, '!important'],
    marginTop: 5
  }
}));

const Home = (props) => {
  const classes = useStyles();
  function Support() {
    return (
      <Typography variant="body2" className={classes.support} align="center">
        Support +91 9833097595
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div class="bg_image"
          style={{
            backgroundImage: 'url(' + rgb + ')',
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            // color: "#f5f5f5"
            display: "flex",
            backgroundColor: 'rgba(0,0,0,0.5)',

          }}>
          <div style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <img
              src={logo}
              // resizeMode={'cover'}
              height={90}
              style={{ display: "flex", border: '0.4px solid rgba(255,255,255, .7)', borderRadius: 3 }}
            />

            <Typography component="h1" variant="h4" className={classes.head}>
              REALTO
            </Typography>
            {/* <Typography variant="body2" gutterBottom className={classes.text}>
              REAL ESTATE
            </Typography> */}
            <div style={{ flexDirection: 'row', marginTop: 180, justifyContent: 'center' }}>
              <Link color="inherit" href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1576966352">
                <img src={appstore} resizeMode={'cover'} height={40} style={{ marginRight: 15 }} />
              </Link>
              {/* <div style={{ marginLeft: 5 }} /> */}
              <Link color="inherit" href="https://play.google.com/store/apps/details?id=com.dejavuapps.flicksick">

                <img
                  src={playstore}
                  resizeMode={'cover'}
                  height={40}
                  style={{ marginLeft: 10, border: '0.4px solid rgba(255,255,255, .7)', borderRadius: 3 }}
                />
              </Link>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                align="center"
                className={classes.subTitle}
              >
                DOWNLOAD YOUR REAL ESTATE PARTNER
              </Typography>

              <Box mt={8}>
                <Copyright />
                <Support />
              </Box>
            </div>

          </div>


        </div>

      </Container>
    </ThemeProvider>
  );
};

export default Home;

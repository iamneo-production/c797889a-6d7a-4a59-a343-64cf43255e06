import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import './playlist.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './jjp.jpeg';
import './nr.jpeg';
import { Button} from "@mui/material";

import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import Rating from '@mui/material/Rating';
function Home() {
  const theme = useTheme();
  const [value, setValue] = React.useState(4);

  return (
    <div>

      <div className="body1">
    <div className="App1">
    <form className='form1'>
    <SearchIcon/>
    <input type='text' placeholder='Search' />
    </form>
    <nav className="navbar">
        <div className="logo">Music hits</div>
        <ul className="nav-links">
          <Link to="/navbar" className='temp3'><li className="nav-item">Home</li></Link>
          <Link to="/sidepanel" className='ac3'><li className="nav-item">Your Playlists</li></Link>
          <Link to="/singer" className='temp3'><li className="nav-item">Singers</li></Link>
          <Link to="/profile" className='temp3'><li className="nav-item">Profile</li></Link>
          <Link to="/" className='temp3'><li className="drop" >Login</li></Link>
        </ul>
      </nav>
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress className="topcolor" color="secondary" /> */}
      {/* <LinearProgress color="success" /> */}
      {/* <LinearProgress className="botcolor" color="inherit" /> */}
    </Stack>
   
    <h4>Your Playlists</h4>
    <section className='allsongs'>
      <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Pathaan
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jhoome Jo Pathaan
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./jjp.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            LEO
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Naa Ready
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./nr.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            K.G.F-2
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Toofan
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./toofan.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            RRR
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Naatu Naatu
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./naatunaatu.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    </section>
    
    </div>

    <div className='leftie'>
   <div className='leftcol'>

    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Beast
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Arabic Kuthu
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./arabickuthu.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Tere Vaaste
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Zara Hatke Zara Bachke
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./terevaaste.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Kushi
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Naa Roja
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./kushi.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Jailer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Kaavala
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./jailer.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    
    

        

    </div>
    </div>
    </div>
    <div className="footer">
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
   </div>

  );
}

export default Home;
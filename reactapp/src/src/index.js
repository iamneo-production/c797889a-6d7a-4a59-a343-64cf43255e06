import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './Navbar';
import Playlist from './Playlist';
import Profile from './Profile';
import MediaControlCard from './Singers';
// import Singer from './Singers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
  <Route exact path='/' element={<App/>}></Route>
  <Route exact path='/navbar' element={<SideNav/>}></Route>
  <Route exact path='/sidepanel' element={<Playlist/>}></Route>
  <Route exact path='/profile' element={<Profile/>}></Route>
  <Route exact path='/singer' element={<MediaControlCard/>}></Route>
</Routes>
  </BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
);

//  import React from "react";
import React from 'react';
import { Link } from 'react-router-dom';
// import SideNav from "./Navbar";
import * as Components from './Components';
import "./App.css";
// import mainbg from './photo-1614149162883-504ce4d13909.jpeg';
 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
        <body className='signincenter'>
        {/* <img src={mainbg} width={700} height={700}/> */}
        
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Input type='cpassword' placeholder='Confirm Password' />
                      <Components.Input type='checkbox'/>Agree tearms and condition<br></br>
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Link to="/navbar"><Components.Button>Sigin In</Components.Button></Link>
                       
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        {/* <Components.Title>Music Hits</Components.Title> */}
                        <Components.Paragraph>
                        If not signed in sign up
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
        </body>
      )
 }

 export default App;
 
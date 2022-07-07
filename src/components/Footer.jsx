import * as React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {

    function handleRedirectGithub() {
        window.open('https://github.com/Luismn-design')
    }

    function handleRedirectLinkedin() {
        window.open('https://www.linkedin.com/in/luis-m-nieva/')
    }

    return (
        <Container sx={{display: 'flex', flexDirection:'row', marginTop:'auto', bgcolor:'#3E5C76', minHeight:'10vh', minWidth:'100%'}}>
            <Container style={{display:'flex', flexDirection:'column', justifyContent:'center'}} >
                <Container style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                    <IconButton onClick={handleRedirectGithub}>
                        <GitHubIcon style={{fontSize:'2rem', color:'#fff'}} />
                        <Typography variant='body1' style={{fontSize:'1.3rem', marginTop:'3px', color:'#fff', marginLeft:'5px'}}> Github </Typography>
                    </IconButton>
                </Container>
                <Container style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                    <IconButton onClick={handleRedirectLinkedin}>
                        <LinkedInIcon style={{fontSize:'2rem', color:'#fff'}}/>
                        <Typography variant='body1' style={{fontSize:'1.3rem', marginTop:'3px', color:'#fff', marginLeft:'5px'}}> Linkedin </Typography>
                    </IconButton>
                </Container>    
            </Container>
            <Container sx={{display:'flex', flexDirection:'column' , justifyContent:'flex-end', alignItems:'flex-end', maxWidth:'40%', marginRight:0, padding:0}}>
                    <Typography variant='caption' color='white' component='p'>
                        © 2022 - The Gamer Nest - Developed by Luis M. Nieva
                    </Typography>
            </ Container>
        </Container>
    );
}


export default Footer;


import { Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import logo from "./Studio_Project.png";
import "./App.css";
import star from "./star.gif";
import { Box, width } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Title() {
    return (
        <Container>
            <Box className="stars">
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
            </Box>

            <Box className="stars">
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
                <img className = "stars" src = {star} alt = "star"></img>
            </Box>
            <div className='topBar'>
                <img src={logo} alt="logo" className= 'spin'>
                    </img>
            </div>
        </Container>


    )
}

export default Title
import { Button } from '@material-ui/core';
import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import topBar from './themes';
import logo from "./Studio_Project.png"
import GameBox from "./GameBox"
import about from './functionality/about';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Title() {
    return (
        <div>
        <Container className='topBar' maxWidth="xl" sx={{ height: "300px" }}>
            <Box sx={{ color: 'primary.contrastText', p: 2, height: "10%", textAlign: 'center', fontFamily: 'roboto', }}>
                <Grid container spacing={1} style={{ color: topBar.palette.primary.main, background: topBar.palette.secondary.main}}>
                    <Grid item xs={2} md={2}>
                        <Item>
                            <Button variant='text' className='topabout' onClick={about}>
                                about
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item >
                            <Button variant='text' className='topcontact'>
                                contact
                            </Button></Item>
                    </Grid>
                    <Grid item xs={4} md ={4}>
                        <img src = {logo} style = {{maxWidth: "300px"}} alt = "logo"></img>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>
                            <Button variant='text' className='topprojects'>
                                projects
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>
                            <Button variant='text' className='topfun'>
                                fun
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <GameBox/>
        </div>
        

    )
}

export default Title
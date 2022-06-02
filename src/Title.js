import { Button } from '@material-ui/core';
import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f2bdcb',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Title() {
    return (
        <Container className='topBar' maxWidth="xl" sx={{ height: "300px" }}>
            <Box sx={{ color: 'primary.contrastText', p: 2, height: "10%", textAlign: 'center', fontFamily: 'roboto', }}>
                <Grid container spacing={1} color="#f2bdcb">
                    <Grid item xs={3} md={3}>
                        <Item sx={{ color: "#f2bdcb" }}>
                            <Button variant='text' color="primary" className='about'>
                                about
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Item sx={{ color: "#f2bdcb" }}><Button variant='text' color="primary" className='contact'>
                            contact
                        </Button></Item>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Item sx={{ color: "#f2bdcb" }}>
                            <Button variant='text' color="primary" className='projects'>
                                projects
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Item sx={{ color: "#f2bdcb" }}><Button variant='text' color="primary" className='fun'>
                            fun
                        </Button></Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default Title
import { Button } from '@material-ui/core';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { center } from 'nunjucks/src/filters';
import * as React from 'react';


function Title() {
    return (
        <Container className='topBar' maxWidth = "xl" sx = {{height: "300px"}}>
            <Box sx={{color: 'primary.contrastText', p: 2, height: "10%", textAlign: 'center', fontFamily : 'roboto',}}>
          <Button variant='text' color='primary'>buytt</Button>
          taylro
        </Box>
        </Container>

    )
}

export default Title
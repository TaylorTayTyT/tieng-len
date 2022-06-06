import { Box, Container } from '@mui/material';
import "./App.css"

function GameBox() {
    return (

        <Container className='gameContainer' maxWidth="xl" sx={{ height: "1200px", fontFamily: 'roboto' }} style={{ paddingTop: "50px" }}>
            <Box bgcolor={"white"} sx={{ height: "20%" }} className="info">
                <h1>heyooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</h1>
            </Box>
            <br className='info' style = {{height: "10%"}}></br>
            <Box bgcolor={"white"} sx={{ height: "20%"}} className="info">

            </Box>
            <br className='info' ></br>
            <Box bgcolor={"white"} sx={{ height: "20%" }} className="info">

            </Box>
            <br className='info'></br>
            <Box bgcolor={"white"} sx={{ height: "20%" }} className="info">

            </Box>
        </Container>

    )
}

export default GameBox;
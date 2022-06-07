import { Box, Container } from '@mui/material';
import "./App.css"

function GameBox() {
    return (

        <Container className='gameContainer' maxWidth="xl" sx={{ height: "1600px", fontFamily: 'roboto' }} style={{ paddingTop: "50px" }}>
            <Box bgcolor={"white"} sx={{ height: "20%" }}  style = {{margin: "0px 0"}} className="info">
                <h1>about</h1>
            </Box>
            <br className='info' ></br>
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
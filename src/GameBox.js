import {Box, Container} from '@mui/material';
import "./App.css"

function GameBox() {
    return (
        
        <Container className='gameContainer' maxWidth = "xl" sx={{height: "1200px"}} style = {{paddingTop: "50px"}}> 
            <Box bgcolor={"white"} sx = {{height: "20%"}} className = "info">

            </Box>
            <br></br>
            <Box bgcolor={"white"} sx = {{height: "20%"}} className = "info">

            </Box>
            <br></br>
            <Box bgcolor={"white"} sx = {{height: "20%"}} className = "info">

            </Box>
            <br></br>
            <Box bgcolor={"white"} sx = {{height: "20%"}} className = "info">

            </Box>
        </Container>
        
    )
}

export default GameBox;
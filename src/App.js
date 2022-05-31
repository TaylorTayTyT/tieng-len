
import "./App.css"
import Card from "./Components/Card";
import Board from "./Components/Board";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";

const canvas = document.getElementById("canv");

const Item = styled(Paper)(({ theme }) => (
  {
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
)
);

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => setData(data))
  }, []);
   
  return (
    <div>
      <div className="headerTitle">
        <h1>Tieng Len</h1>
      </div>
      <div className="card">
        <Card
          ctx={canvas}
        />
      </div>
      <Container>
        <Button variant="contained">Hello World</Button>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
          <Box gridColumn="span 8">
            <Item>
              <Button variant="text">
                Example
              </Button>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 8">
            <Item>xs=8</Item>
          </Box>
        </Box>
      </Container>
    </div>
  )

}

export default App;

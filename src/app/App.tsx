import React from 'react';
import './App.css';
import {CallsBlock} from "../components/CallsBlock";
import Box from "@mui/material/Box";
import {Header} from "components/Header";
import {MyDrawer} from "components/MyDrawer";

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{display: 'flex'}}>
      <Header drawerWidth={drawerWidth}/>
      <MyDrawer drawerWidth={drawerWidth}/>
      <CallsBlock/>
    </Box>
  );
}

export default App;

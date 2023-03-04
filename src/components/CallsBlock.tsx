import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {CallsList} from "../features/calls/CallsList";
import {Settings} from "./Settings";

export const CallsBlock = () => {
  return (
    <Box
      component="main"
      sx={{flexGrow: 1, p: 5}}
    >
      <Toolbar/>
      <Settings/>
      <CallsList/>
    </Box>
  );
}
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Settings} from "./Settings";
import {CallsList} from 'features/calls/CallsList';

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
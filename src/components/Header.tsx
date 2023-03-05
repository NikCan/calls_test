import AppBar from '@mui/material/AppBar'
import headerImg from 'assets/images/header.png'

type Props = {
  drawerWidth: number
}

export const Header = ({drawerWidth}: Props) => {
  return (
    <AppBar
      position="absolute"
      sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, background: '#FFFFFF', color: 'black'}}
    >
      <img src={headerImg} alt="header"/>
    </AppBar>
  );
}
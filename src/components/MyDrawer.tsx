import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import skilla from 'assets/images/skilla.png'
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import {itemsForDrawer} from "../features/calls/utils/constants/itemsForDrawer";

type Props = {
  drawerWidth: number
}
export const MyDrawer = ({drawerWidth}: Props) => {

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#091336',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img src={skilla} alt="Skilla"/>
      <List>
        {itemsForDrawer.map(item => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText style={{color: '#FFFFFF'}} primary={item.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant={"contained"} endIcon={<AddCircleIcon/>} sx={{margin: '15px', width: '200px', height: '52px'}}>Добавить
        заказ</Button>
      <Button variant={"contained"} endIcon={<ErrorOutlinedIcon/>}
              sx={{margin: '15px', width: '200px', height: '52px'}}>Оплата</Button>
    </Drawer>

  );
}
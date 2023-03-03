import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallIcon from '@mui/icons-material/Call';
import TimelineIcon from '@mui/icons-material/Timeline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import skilla from '../assets/images/skilla.png'
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

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
        {['Итоги', 'Заказы', 'Сообщения', 'Звонки', 'Контрагенты', 'Документы', 'Исполнители', 'Отчеты', 'База знаний', 'Настройки'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <TimelineIcon style={{color: 'white'}}/>}
                {index === 1 && <DoneAllIcon style={{color: 'white'}}/>}
                {index === 2 && <MailOutlineIcon style={{color: 'white'}}/>}
                {index === 3 && <CallIcon style={{color: 'white'}}/>}
                {index === 4 && <PeopleOutlinedIcon style={{color: 'white'}}/>}
                {index === 5 && <DescriptionIcon style={{color: 'white'}}/>}
                {index === 6 && <PersonOutlineOutlinedIcon style={{color: 'white'}}/>}
                {index === 7 && <WorkOutlineOutlinedIcon style={{color: 'white'}}/>}
                {index === 8 && <LocalLibraryOutlinedIcon style={{color: 'white'}}/>}
                {index === 9 && <SettingsOutlinedIcon style={{color: 'white'}}/>}
              </ListItemIcon>
              <ListItemText style={{color: '#FFFFFF'}} primary={text}/>
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
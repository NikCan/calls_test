import {nanoid} from "@reduxjs/toolkit";
import TimelineIcon from "@mui/icons-material/Timeline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const itemsForDrawer = [
  {
    id: nanoid(),
    title: 'Итоги',
    icon: <TimelineIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Заказы',
    icon: <DoneAllIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Сообщения',
    icon: <MailOutlineIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Звонки',
    icon: <CallIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Контрагенты',
    icon: <PeopleOutlinedIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Документы',
    icon: <DescriptionIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Исполнители',
    icon: <PersonOutlineOutlinedIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Отчеты',
    icon: <WorkOutlineOutlinedIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'База знаний',
    icon: <LocalLibraryOutlinedIcon style={{color: 'white'}}/>
  },
  {
    id: nanoid(),
    title: 'Настройки',
    icon: <SettingsOutlinedIcon style={{color: 'white'}}/>
  }
]

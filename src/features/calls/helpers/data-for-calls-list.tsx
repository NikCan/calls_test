import {GridColDef} from "@mui/x-data-grid";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import React from "react";
import avatar from '../../../assets/images/avatar.png'

export const columns: GridColDef[] = [
  {
    field: 'type',
    renderCell: (params) => {
      return params.value === 1 ? <CallReceivedIcon color={'success'}/> : <CallMadeIcon color={'primary'}/>
    },
    headerName: 'Тип',
    width: 70,
  },
  {
    field: 'date',
    renderCell: (params) => {
      return params.value.split(' ')[1]
    },
    headerName: 'Время',
    width: 70
  },
  {
    field: 'employee',
    renderCell: (params) => {
      return <img height={32} src={params.value || avatar} alt='avatar'/>
    },
    headerName: 'Сотрудник',
    width: 90
  },
  {field: 'call', headerName: 'Звонок', width: 150},
  {field: 'source', headerName: 'Источник', width: 120},
  {field: 'grade', headerName: 'Оценка', width: 150},
  {
    field: 'time',
    renderCell: (params) => {
      const min = Math.floor(params.value / 60)
      const sec = params.value - min * 60
      const fullSec = sec < 10 ? `0${sec}` : sec
      return <>{min}:{fullSec}</>
    },
    headerName: 'Длительность',
    width: 200
  },
];
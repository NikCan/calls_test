import React, {MouseEvent, useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useCallsList} from "./hooks/use-calls-list";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {MyAudioPlayer} from "components/MyAudioPlayer";
import avatar from 'assets/images/avatar.png'
import LinearProgress from "@mui/material/LinearProgress";

export const CallsList = () => {
  const {rows} = useCallsList()
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const onMouseEnterRow = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = Number(e.currentTarget.getAttribute("data-id"));
    setHoveredRow(id)
  }
  const onMouseLeaveRow = () => setHoveredRow(null)

  const columns: GridColDef[] = [
    {
      field: 'type',
      renderCell: (params) => {
        return params.value === 1 ? <CallReceivedIcon color={'success'}/> : <CallMadeIcon color={'primary'}/>
      },
      headerName: 'Тип',
      flex: 1,
    },
    {
      field: 'date',
      renderCell: (params) => {
        return params.value.split(' ')[1]
      },
      headerName: 'Время',
      flex: 3,
    },
    {
      field: 'employee',
      renderCell: (params) => {
        return <img height={32} src={params.value || avatar} alt='avatar'/>
      },
      headerName: 'Сотрудник',
      flex: 3,
    },
    {field: 'call', headerName: 'Звонок', flex: 7},
    {field: 'source', headerName: 'Источник', flex: 5},
    {field: 'grade', headerName: 'Оценка', flex: 5},
    {
      field: 'time',
      renderCell: (params) => {
        if (hoveredRow === params.id && params.row.grade === 'Дозвонился') {
          const dataForRequest = {
            record: params.row.record,
            partnership_id: params.row.partnership_id
          }
          return <MyAudioPlayer dataForRequest={dataForRequest}/>
        } else {
          const min = Math.floor(params.value / 60)
          const sec = params.value - min * 60
          const fullSec = sec < 10 ? `0${sec}` : sec
          return <>{min}:{fullSec}</>
        }
      },
      headerName: 'Длительность',
      flex: 10
    },
  ]

  return rows ? (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        hideFooter
        autoHeight
        disableColumnMenu
        componentsProps={{
          row: {
            onMouseEnter: onMouseEnterRow,
            onMouseLeave: onMouseLeaveRow,
          },
        }}
      />
    </div>
  ) : <LinearProgress/>
}


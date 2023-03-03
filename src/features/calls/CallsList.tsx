import React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {useCallsList} from "./hooks/use-calls-list";
import CircularProgress from "@mui/material/CircularProgress";
import {columns} from './helpers/data-for-calls-list';

export function CallsList() {
  const {rows} = useCallsList()
  return rows ? (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        hideFooter
        autoHeight
      />
    </div>
  ) : <CircularProgress/>
}


import React, {MouseEvent, useState} from 'react';
  import {DataGrid} from "@mui/x-data-grid";
  import {useCallsList} from "./hooks/use-calls-list";
  import LinearProgress from "@mui/material/LinearProgress";
  import {createColumnsForCallsList} from "./utils/helpers/createColumnsForCallsList";

  export const CallsList = () => {
    const {rows} = useCallsList()
    const [hoveredRow, setHoveredRow] = useState<number | null>(null)

    const onMouseEnterRow = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      setHoveredRow(id)
    }
    const onMouseLeaveRow = () => setHoveredRow(null)

    const columns = createColumnsForCallsList(hoveredRow)

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


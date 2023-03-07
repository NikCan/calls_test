import React, {useEffect} from "react";
import {useGetRecordMutation} from "features/calls/callsAPI";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  dataForRequest: {
    record: string
    partnership_id: string
  }
}
export const AudioPlayer = ({dataForRequest}: Props) => {
  const [getRecord, {data, isSuccess}] = useGetRecordMutation()
  useEffect(() => {
    getRecord(dataForRequest)
  }, [])

  return isSuccess
    ? <audio controls src={data}/>
    : <CircularProgress/>
}
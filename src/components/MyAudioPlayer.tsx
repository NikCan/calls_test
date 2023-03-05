import React, {useEffect} from "react";
import AudioPlayer from "mui-audio-player-plus";
import {useGetRecordMutation} from "features/calls/callsAPI";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  dataForRequest: {
    record: string
    partnership_id: string
  }
}
export const MyAudioPlayer = ({dataForRequest}: Props) => {
  const [getRecord, {data, isSuccess}] = useGetRecordMutation()
  useEffect(() => {
    getRecord(dataForRequest)
  }, [])

  return isSuccess
    ? <AudioPlayer display="timeline" containerHeight={'100%'} inline src={data}/>
    : <CircularProgress/>
}
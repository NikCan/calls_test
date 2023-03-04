import dayjs, {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useState} from "react";
import {useSearch} from "../features/calls/hooks/use-search";
import 'dayjs/locale/ru';

const dateForApi = (date: Dayjs) => dayjs(date).format('YYYY-MM-DD')
type Props = {
  position: 'start' | 'end'
}
export default function Calendar({position}: Props) {
  const {setSearchParams, search} = useSearch()
  const [value, setValue] = useState<Dayjs | null>(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        label={position}
        value={value}
        onChange={(newValue) => {
          if (newValue) {
            position === "start" && setSearchParams({...search, date_start: dateForApi(newValue)})
            position === "end" && setSearchParams({...search, date_end: dateForApi(newValue)})
          }
          setValue(newValue);
        }}
        renderInput={(params) => <TextField style={{marginRight: '10px'}} variant={'standard'} {...params} />}
      />
    </LocalizationProvider>
  );
}
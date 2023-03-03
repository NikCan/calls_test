import {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useState} from "react";
import {useSearch} from "../features/calls/hooks/useSearch";

const createDate = (date: Dayjs) => {
  const year = date.year()
  const month = date.month() > 9 ? date.month() : `0${date.month()}`
  const day = date.day() > 9 ? date.day() : `0${date.day()}`
  return `${year}-${month}-${day}`
}

export default function Calendar() {
  const {setSearchParams} = useSearch()
  const [value, setValue] = useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          if (newValue) setSearchParams({date_start: createDate(newValue), date_end: createDate(newValue)})
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
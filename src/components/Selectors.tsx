import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from "react";
import {useSearch} from "features/calls/hooks/use-search";

export const Selectors = () => {
  const {setSearchParams, search} = useSearch()
  const [value, setValue] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    if (event.target.value !== 'all') {
      setSearchParams({...search, in_out: event.target.value})
    } else {
      const newSearch = {...search}
      delete newSearch.in_out
      setSearchParams({...newSearch})
    }
  };

  return (
    <FormControl variant={"standard"} sx={{m: 2, minWidth: 120}}>
      <Select
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={'all'}>Все звонки</MenuItem>
        <MenuItem value={'1'}>Входящие</MenuItem>
        <MenuItem value={'0'}>Исходящие</MenuItem>
      </Select>
    </FormControl>
  );
}
import Calendar from "./Calendar";
import {Selectors} from "./Selectors";

export const Settings = () => {
  return (
    <div style={{display: 'flex', marginBottom: '10px'}}>
      <Selectors/>
      <Calendar position={'start'}/>
      <Calendar position={'end'}/>
    </div>
  )
}
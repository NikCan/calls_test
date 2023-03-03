import Calendar from "./Calendar";
import {Selectors} from "./Selectors";

export const Settings = () => {
  return (
    <div style={{display: 'flex'}}>
      <Selectors/>
      <Calendar/>
    </div>
  )
}
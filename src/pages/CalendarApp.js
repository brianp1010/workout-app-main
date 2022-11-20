import React from "react";
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function CalendarApp() {

  
function onChanges(nextValue){
  setValue(nextValue)
}

  /* 
  -----------------------------------------------------------------------------------------------
  CALENDAR SECTION
  -----------------------------------------------------------------------------------------------
  */
  const [values, setValue] = useState(new Date());
  /*
  -----------------------------------------------------------------------------------------------
  END CALENDAR SECTION
  -----------------------------------------------------------------------------------------------
   */
return (
<Container className="d-flex align-items-center 
        justify-content-center" style={{ minHeight: "100vh"}} >                                                       
<div class="text-center m-5">
{" "}
  <h1 class="font-monospace lead">Workout Calendar</h1>
  <Calendar onChanges={onChanges} values={values} />
{" "}
</div>
</Container>
);
}

export default CalendarApp;

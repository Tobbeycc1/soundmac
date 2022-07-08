import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


function DatePickerForm(props) {
    const [startDate, setStartDate] = useState(new Date());
    return(
        <DatePicker selected={startDate} onChange={(date)=>
        
            setStartDate(date) }/>
    )
}
export default DatePickerForm
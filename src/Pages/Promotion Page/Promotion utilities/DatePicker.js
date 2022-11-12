import DatePicker from "react-datepicker";

import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../../../CSS files/datePicker.css";

function DatePickerForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        isClearable
        placeholderText="Pick a date"
        closeOnScroll={(e) => e.target === document}
      />
    </div>
  );
}
export default DatePickerForm;

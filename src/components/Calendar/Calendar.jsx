import { DayPicker, getDefaultClassNames } from "react-day-picker";

import "react-day-picker/style.css";
import "./calendar.css";

export function Calendar(props) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="calendar-container">
      <DayPicker
        mode="single"
        disabled={[{ before: new Date() }, { dayOfWeek: [0] }]}
        classNames={{
          selected: `${defaultClassNames.selected} calendar-selected`,
          day: `${defaultClassNames.day} calendar-day`,
        }}
        {...props}
      />
    </div>
  );
}

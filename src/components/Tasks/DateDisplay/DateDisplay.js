import "./DateDisplay.scss";

function DateDisplay(props) {
  const date = new Date(props.date);
  const day = date.getDate();
  const month = date.getMonth();
  const dayOfWeek = date.getDay();
  const dayOfWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div id="date-display">
      <div id="date-display__day">{dayOfWeekNames[dayOfWeek]}</div>
      <div id="date-display__date">
        <div id="date-display__date-day">{day}</div>
        <div id="date-display__date-month">{monthNames[month]}</div>
      </div>
    </div>
  );
}

export default DateDisplay;

import React, { useState } from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
function CustomDatePicker() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    handleClose();
  };

  const handlePreviousDay = () => {
    setCurrentDate(currentDate.subtract(1, "day"));
  };

  const handleNextDay = () => {
    setCurrentDate(currentDate.add(1, "day"));
  };

  const open = Boolean(anchorEl);
  const id = open ? "date-popover" : undefined;

  const dateList = Array.from({ length: 15 }, (_, index) =>
    currentDate.subtract(7, "day").add(index, "day")
  );

  return (
    <div>
      <div
        className="border rounded"
        style={{ display: "flex", alignItems: "center" }}
      >
        <IconButton className="h-12px" onClick={handlePreviousDay}>
          <ArrowBackIosIcon />
        </IconButton>
        <button onClick={handleClick} startIcon={<CalendarTodayIcon />}>
          <CalendarMonthIcon className="icon-picker opacity-80"/>
          {selectedDate.format("DD/MM ddd").toUpperCase()}
        </button>
        <IconButton className="h-12px" onClick={handleNextDay}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ width: 200 }}>
          {dateList.map((date, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleDateSelect(date)}
              sx={{
                backgroundColor: date.isSame(dayjs(), "day")
                  ? "pink"
                  : "inherit",
                color: date.isSame(dayjs(), "day") ? "white" : "inherit",
                fontWeight: date.isSame(dayjs(), "day") ? "bold" : "normal",
              }}
            >
              <ListItemText
                primary={date.format("DD/MM ddd").toUpperCase()}
                primaryTypographyProps={{ textAlign: "center" }}
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}

export default CustomDatePicker;

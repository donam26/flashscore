import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PushPinIcon from "@mui/icons-material/PushPin";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TvIcon from "@mui/icons-material/Tv";
import dayjs from 'dayjs';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CustomDatePicker from "./CustomDatePicker";

const Container = () => {
  const leagues = [
    {
      region: "CHÂU Á",
      name: "AFC Champions League",
      matches: [
        {
          time: "23:00",
          team1: "Al Ain (Uae)",
          team2: "Al Hilal (Sau)",
          score: "-",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al Shorta (Irq)",
          team2: "Pakhtakor (Uzb)",
          score: "1",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
      ],
    },
    {
      region: "TÂY BAN NHA",
      name: "La Liga",
      matches: [
        {
          time: "Kết thúc",
          team1: "Barcelona",
          team2: "Sevilla",
          score: "5",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
      ],
    },
    {
      region: "TÂY BAN NHA",
      name: "La Liga",
      matches: [
        {
          time: "Kết thúc",
          team1: "Barcelona",
          team2: "Sevilla",
          score: "5",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
      ],
    },
    {
      region: "TÂY BAN NHA",
      name: "La Liga",
      matches: [
        {
          time: "Kết thúc",
          team1: "Barcelona",
          team2: "Sevilla",
          score: "5",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
      ],
    },
    {
      region: "TÂY BAN NHA",
      name: "La Liga",
      matches: [
        {
          time: "Kết thúc",
          team1: "Barcelona",
          team2: "Sevilla",
          score: "5",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
        {
          time: "23:00",
          team1: "Al-Sadd (Qat)",
          team2: "Persepolis (Irn)",
          score: "2",
          hasTv: true,
        },
      ],
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());

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

  const open = Boolean(anchorEl);
  const id = open ? "date-popover" : undefined;

  // Generate the list of dates (15 days range as example)
  const dateList = Array.from({ length: 15 }, (_, index) =>
    dayjs().subtract(7, "day").add(index, "day")
  );

  return (
    <>
      <div className="flex space-x-2 mb-4 tab w-full">
        <button className="bg-red-500 text-white px-2 py-2 rounded-lg tab letter font-bold hover:bg-[#c8cdcd] ">
          TẤT CẢ
        </button>
        <button className="bg-[#eee] px-2 py-2 text-[#555e61] rounded-lg tab letter font-bold hover:bg-[#c8cdcd]  hover:text-[#001e28]">
          LIVE
        </button>
        <button className="bg-[#eee] px-2 py-2 text-[#555e61] rounded-lg tab letter font-bold hover:bg-[#c8cdcd]  hover:text-[#001e28]">
          TỶ LỆ KÈO
        </button>
        <button className="bg-[#eee] px-2 py-2 text-[#555e61] rounded-lg tab letter font-bold hover:bg-[#c8cdcd]  hover:text-[#001e28]">
          ĐÃ KẾT THÚC
        </button>
        <button className="bg-[#eee] px-2 py-2 text-[#555e61] rounded-lg tab letter font-bold hover:bg-[#c8cdcd]  hover:text-[#001e28]">
          SẮP DIỄN RA
        </button>
        <CustomDatePicker />
      </div>
      <div className="w-full">
        {leagues.map((league, index) => (
          <div key={index} className="mb-4 customAccordion">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="icon" />}
                className="flex items-center bg-[#eef7ff] px-4 rounded opacity-80"
                style={{ backgroundColor: "#eef7ff" }}
              >
                <div className="flex items-center w-full ">
                  <IconButton size="small">
                    <StarBorderIcon className="text-gray-500" />
                  </IconButton>
                  <img
                    src="https://flagcdn.com/16x12/gb.png"
                    alt="Ngoại hạng Anh"
                    className="mr-2"
                  />
                  <Typography variant="h6" className="font-semibold flex-grow">
                    <span className="mr-2 font-size-13 font-bold">
                      {league.region}: {league.name}
                    </span>
                    <IconButton className="icon ml-1">
                      <PushPinIcon className="text-blue-500" />
                    </IconButton>
                  </Typography>
                  <a
                    href="#"
                    className="opacity-80 px-1 rounded-lg tab underline"
                  >
                    Bảng xếp hạng
                  </a>
                </div>
              </AccordionSummary>
              <AccordionDetails className="">
                <div className="">
                  {league.matches.map((match, matchIndex) => (
                    <div
                      key={matchIndex}
                      className="flex items-center justify-between py-2 py-2imp border-b"
                    >
                      <div className="flex items-center w-3/5">
                        <IconButton size="small">
                          <StarBorderIcon className="text-gray-500 mr-4" />
                        </IconButton>
                        <span className="text-gray-500 font-size-13  mr-4">
                          {match.time}
                        </span>
                        <div className="flex flex-col gap-y-1">
                          <div className="flex">
                            <img
                              className="w-[14px] h-[14px] mr-1"
                              src="https://static.flashscore.com/res/image/data/4xQjb4kC-OKa9P8WR.png"
                              alt=""
                            />
                            <span
                              variant="body1"
                              className="font-medium font-size-13"
                            >
                              {match.team1}
                            </span>
                          </div>
                          <div className="flex">
                            <img
                              className="w-[14px] h-[14px] mr-1"
                              src="https://static.flashscore.com/res/image/data/EVoO06R0-joUWHZ1t.png"
                              alt=""
                            />
                            <span
                              variant="body1"
                              className="font-medium font-size-13"
                            >
                              {match.team2}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center w-2/5">
                        <div className="w-1/2">
                          <div className="flex flex-col">
                            <span
                              variant="body2"
                              className="font-bold font-size-13 text-red-600"
                            >
                              {match.score}
                            </span>
                            <span
                              variant="body2"
                              className="font-bold font-size-13 text-red-600"
                            >
                              {match.score}
                            </span>
                          </div>
                        </div>
                        <div className="w-1/2  border-l-2 flex justify-center">
                          {match.hasTv && (
                            <TvIcon className="text-gray-400 icon" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default Container;

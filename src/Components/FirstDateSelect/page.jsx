"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import CardTransparentStyle from "./DateCardStyle/DateCardStyle.module.css";

const FirstDateSelect = () => {
  const [startDate, setStartDate] = useState(
    moment().startOf("month").toDate()
  );
  const [endDate, setEndDate] = useState(moment().endOf("month").toDate());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCustomRangeActive, setIsCustomRangeActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("This Month");

  const applyPresetRange = (type) => {
    const today = moment();
    setIsCustomRangeActive(false);
    if (type === "Today") {
      setStartDate(today.toDate());
      setEndDate(today.toDate());
    } else if (type === "Yesterday") {
      setStartDate(today.subtract(1, "days").toDate());
      setEndDate(today.toDate());
    } else if (type === "Last 7 Days") {
      setStartDate(today.subtract(6, "days").toDate());
      setEndDate(moment().toDate());
    } else if (type === "Last 30 Days") {
      setStartDate(today.subtract(29, "days").toDate());
      setEndDate(moment().toDate());
    } else if (type === "This Month") {
      setStartDate(moment().startOf("month").toDate());
      setEndDate(moment().endOf("month").toDate());
    } else if (type === "Last Month") {
      setStartDate(moment().subtract(1, "months").startOf("month").toDate());
      setEndDate(moment().subtract(1, "months").endOf("month").toDate());
    } else if (type === "Custom Range") {
      setIsCustomRangeActive(true);
    }
    setSelectedOption(type);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex md:flex-row flex-col justify-between items-center">
      <div></div>
      <div className="relative md:w-[400px] text-gray-400 mt-[60px]">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`w-full text-left  p-2   rounded flex justify-between items-center ${CardTransparentStyle.cardTransparent}`}
        >
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            {selectedOption !== "Custom Range"
              ? `${selectedOption} (${moment(startDate).format(
                  "MMM DD, YYYY"
                )} - ${moment(endDate).format("MMM DD, YYYY")})`
              : "Custom Range"}
          </span>
          <span>&#9662;</span>
        </button>

        {isDropdownOpen && (
          <div
            className={`absolute rounded mt-2 text-gray-400 w-full z-10 shadow-md ${CardTransparentStyle.cardTransparent}`}
          >
            {[
              "Today",
              "Yesterday",
              "Last 7 Days",
              "Last 30 Days",
              "This Month",
              "Last Month",
              "Custom Range",
            ].map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => applyPresetRange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        {isCustomRangeActive && (
          <div className="mt-4 flex gap-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className=" p-2 rounded w-full"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="End Date"
              className=" p-2 rounded w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstDateSelect;

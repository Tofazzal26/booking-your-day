"use client";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Calendar icon
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"; // Dropdown icons
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DropdownDatePicker = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative max-w-full">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-lg lg:max-w-3xl"
      >
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-blue-500" />
          <span>January 15, 2020 - February 13, 2020</span>
        </div>
        {isDropdownOpen ? (
          <IoMdArrowDropup className="text-gray-500 w-5 h-5" />
        ) : (
          <IoMdArrowDropdown className="text-gray-500 w-5 h-5" />
        )}
      </button>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div
          className="absolute z-50 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-lg lg:max-w-3xl lg:w-[800px] p-4"
          style={{ minWidth: "320px" }}
        >
          <DateRangePickerWithGap />
        </div>
      )}
    </div>
  );
};

const DateRangePickerWithGap = () => {
  const [dateRange, setDateRange] = useState([null, null]); // Start and End Date
  const [startDate, endDate] = dateRange; // Destructure dates
  const [activeOption, setActiveOption] = useState("Custom Range");

  const options = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    switch (option) {
      case "Today":
        setDateRange([today, today]);
        break;
      case "Yesterday":
        setDateRange([yesterday, yesterday]);
        break;
      case "Last 7 Days":
        setDateRange([
          new Date(today.setDate(today.getDate() - 7)),
          new Date(),
        ]);
        break;
      case "Last 30 Days":
        setDateRange([
          new Date(today.setDate(today.getDate() - 30)),
          new Date(),
        ]);
        break;
      case "This Month":
        setDateRange([
          new Date(today.getFullYear(), today.getMonth(), 1),
          new Date(today.getFullYear(), today.getMonth() + 1, 0),
        ]);
        break;
      case "Last Month":
        setDateRange([
          new Date(today.getFullYear(), today.getMonth() - 1, 1),
          new Date(today.getFullYear(), today.getMonth(), 0),
        ]);
        break;
      default:
        setDateRange([null, null]);
        break;
    }
  };

  const handleCancel = () => {
    setDateRange([null, null]);
    setActiveOption("Custom Range");
  };

  const handleApply = () => {
    if (startDate && endDate) {
      alert(
        `Selected Date Range:\nStart: ${startDate.toDateString()}\nEnd: ${endDate.toDateString()}`
      );
    } else {
      alert("Please select a date range!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/3 border-r border-gray-300 p-4">
        <h3 className="font-semibold text-gray-700 mb-4">Quick Ranges</h3>
        <ul className="space-y-2">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer p-2 rounded-lg ${
                activeOption === option
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="md:w-[800px] p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Select Date Range</h3>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* First Calendar */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Start Date</p>
            <DatePicker
              selected={startDate}
              onChange={(update) => setDateRange([update, endDate])}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              dateFormat="yyyy-MM-dd"
              placeholderText="Start Date"
              inline
            />
          </div>
          {/* Second Calendar */}
          <div>
            <p className="text-sm text-gray-500 mb-2">End Date</p>
            <DatePicker
              selected={endDate}
              onChange={(update) => setDateRange([startDate, update])}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              dateFormat="yyyy-MM-dd"
              placeholderText="End Date"
              inline
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownDatePicker;

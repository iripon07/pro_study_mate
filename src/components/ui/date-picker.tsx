"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, getMonth, getYear, setMonth, setYear } from "date-fns";
import * as React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";

interface IDatePickerProps {
  startYear?: number;
  endYear?: number;
}

export function DatePicker({
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()) + 100,
}: IDatePickerProps) {
  const [date, setDate] = React.useState<Date>(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  const handleMonthChange = (month: string) => {
    const newDate = setMonth(date, months.indexOf(month));
    setDate(newDate);
  };

  const handleYearChange = (year: string) => {
    const newDate = setYear(date, parseInt(year));
    setDate(newDate);
  };

  const handleSelect = (selectedData: Date | undefined) => {
    if (selectedData) {
      setDate(selectedData);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between  text-sm font-normal text-[#4B515559]",
            !date && "text-muted-foreground",
          )}
        >
          {date ? (
            <span className="">{format(date, "dd-MM-yyyy")}</span>
          ) : (
            <span className="text-red-500 text-sm">Pick a date</span>
          )}

          <FaRegCalendarAlt />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <div className="flex gap-6">
          <Select
            onValueChange={handleMonthChange}
            value={months[getMonth(date)]}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleYearChange}
            value={getYear(date).toString()}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          month={date}
          selected={date}
          onSelect={handleSelect}
          initialFocus
          onMonthChange={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}

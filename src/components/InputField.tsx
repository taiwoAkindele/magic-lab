import React from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/SearchIcon.svg";

const InputField = ({
  searchValue,
  onChange,
}: {
  searchValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="h-[44px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] flex items-center gap-[8px]">
      <div>
        <SearchIcon />
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        className="outline-none border-none placeholder:text-[#667085]"
        placeholder="Search"
      />
    </div>
  );
};

export default InputField;

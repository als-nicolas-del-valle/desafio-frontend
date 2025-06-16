import React from "react";
import Icon from "./Icon.component";
import HistoryIcon from "../../assets/history.svg";

const SearchHistoryItem = ({ term, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(term)}
      className="flex flex-row items-center gap-2 cursor-pointer w-full text-left px-4 py-2 hover:bg-sky-100 transition rounded-md"
    >
      <Icon url={HistoryIcon} />
      <span className="text-sm text-gray-700">{term}</span>
    </button>
  );
};

export default SearchHistoryItem;

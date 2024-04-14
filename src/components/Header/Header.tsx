import { useState } from "react";
import "./Header.css";
import { Language } from "@mui/icons-material";

interface SearchFieldProps {
  title: string;
  action: string;
  onClick?: () => void;
}

const SearchField: React.FC<SearchFieldProps> = (props: SearchFieldProps) => {
  const handleSelect = () => {
    props.onClick?.();
  };
  return (
    <div
      className="flex flex-col justify-start bg-white hover:bg-gray-300 py-3 px-8 cursor-pointer updated-border-radius"
      onClick={handleSelect}
    >
      <span className="font-bold">{props.title}</span>
      <span className="font-normal">{props.action}</span>
    </div>
  );
};

// const OverlayMenu: React.FC = () => {
//   <div className="card"></div>;
// };

const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(-1);

  const openDestinationsearchModal = () => {
    setSelectedTab(0);
  };

  return (
    <nav className="flex flex-row justify-between items-center">
      <img alt="logo"></img>
      <div className="search-box flex flex-row w-fit updated-border-radius">
        <SearchField
          title="Where"
          action="Search destinations"
          onClick={openDestinationsearchModal}
        ></SearchField>
        <SearchField title="Check in" action="Add dates"></SearchField>
        <SearchField title="Check out" action="Add dates"></SearchField>
        <SearchField title="Who" action="Add guests"></SearchField>
      </div>
      <div className="flex flex-row gap-1">
        <Language />
        <div>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;

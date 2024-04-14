import { useEffect, useState } from "react";
import "./Header.css";
import { AccountCircle, Language, Reorder } from "@mui/icons-material";
import Card from "../Card";
import { Modal } from "@mui/material";

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

  const changeTab = (currentTab: number) => {
    console.log(selectedTab);
    selectedTab === currentTab
      ? setSelectedTab(-1)
      : setSelectedTab(currentTab);
  };

  useEffect(() => {
    console.log(selectedTab);
  }, []);

  return (
    <nav className="nav">
      <img alt="logo"></img>
      <div className="search-box flex flex-row w-fit updated-border-radius">
        <SearchField
          title="Where"
          action="Search destinations"
          onClick={() => {
            changeTab(0);
          }}
        ></SearchField>
        <SearchField
          title="Check in"
          action="Add dates"
          onClick={() => {
            changeTab(1);
          }}
        ></SearchField>
        <SearchField
          title="Check out"
          action="Add dates"
          onClick={() => {
            changeTab(2);
          }}
        ></SearchField>
        <SearchField
          title="Who"
          action="Add guests"
          onClick={() => {
            changeTab(3);
          }}
        ></SearchField>
      </div>
      <div className="flex flex-row gap-3 items-center relative">
        <Language />
        <div
          className="toggle-user-menu"
          onClick={() => {
            changeTab(4);
          }}
        >
          <Reorder />
          <AccountCircle />
        </div>
        {selectedTab === 4 && (
          <Card>
            <button className="sign-buttons">Sign Up</button>
            <button className="sign-buttons">Sign In</button>
          </Card>
        )}
         <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
            <Card> {/* Your existing Card component content */}
            <Button variant="contained" color="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </nav>
  );
};

export default Header;

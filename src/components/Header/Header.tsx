import { useEffect, useState } from "react";
import "./Header.css";
import { AccountCircle, Close, Language, Reorder } from "@mui/icons-material";
import Card from "../Card";
import { Box, Divider, Modal, Select } from "@mui/material";

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
  const [openModal, setOpenModal] = useState(false);

  const changeTab = (currentTab: number) => {
    console.log(selectedTab);
    selectedTab === currentTab
      ? setSelectedTab(-1)
      : setSelectedTab(currentTab);
  };

  // const openModal = () => {

  // }

  const handleCloseModal = () => {
    setOpenModal(false);
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
            <button
              className="sign-buttons"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Sign Up
            </button>
            <button
              className="sign-buttons"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Sign In
            </button>
          </Card>
        )}

        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <div className="flex flex-row justify-between">
              <span
                className="cursor-pointer self-start"
                onClick={handleCloseModal}
              >
                <Close />
              </span>
              <span className="self-center grow text-center">
                Log In or Sign Up
              </span>
            </div>
            <Divider orientation="horizontal" variant="fullWidth"></Divider>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xl">Welcome to Airbnb</span>
              <input type="text" placeholder="username" className="p-2"></input>
              <input
                type="password"
                placeholder="password"
                className="p-2"
              ></input>
              <footer className="text-xs">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply. <a>Privacy Policy</a>
              </footer>
              <button className=" text-white w-full p-3  continue-to-sign-in-button">
                Continue
              </button>
              <Divider textAlign="center" orientation="horizontal">
                or
              </Divider>
              <div>
                <span>continue with Facebook</span>
              </div>
              <div>continue with Google</div>
            </div>
          </Box>
        </Modal>
      </div>
    </nav>
  );
};

export default Header;

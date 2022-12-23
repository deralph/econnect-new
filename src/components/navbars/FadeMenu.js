import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { businessAction } from "../../store/business.slice";

export default function FadeMenu({ option, nav }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const business = (main) => {
    if (main === "Add Business") {
      return dispatch(businessAction.add());
    }
    return;
  };

  const handleClose = (main) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {" "}
        {nav ? (
          <FaUserAlt className="text-white sm:block hidden" />
        ) : (
          <MdOutlineKeyboardArrowUp className="text-primary text-3xl sm:block hidden" />
        )}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {option.map(({ main, Icon, color }) => {
          return (
            <MenuItem
              onClick={() => {
                handleClose();
                business(main);
              }}
              key={main}
            >
              <Link
                to={
                  main === "Add Question"
                    ? "/addques"
                    : main === "My Questions"
                    ? "/myquestion"
                    : main === "Post Update"
                    ? "/post-news"
                    : main === "View Posted Updates"
                    ? "/updates"
                    : main === "Add Friends"
                    ? "/add-friends"
                    : main === "Edit Profile"
                    ? "/edit-Profile"
                    : main === "Message"
                    ? "/chat"
                    : main === "login"
                    ? "/login"
                    : main === "register"
                    ? "/register"
                    : ""
                }
              >
                {Icon && <Icon className="mr-[0.4em] float-left" />} {main}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

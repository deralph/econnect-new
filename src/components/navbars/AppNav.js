import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/sidenav.slice";

const AppNav = ({ chats, mains }) => {
  const dispatch = useDispatch();
  const navValue = useSelector((state) => state.nav);
  // console.log(navValue);

  return (
    <nav className="bg-white flex justify-between items-center w-screen fixed top-0 py-2 px-[5%] z-30">
      <div className="flex items-center">
        <GiHamburgerMenu
          className="burger "
          onClick={
            chats
              ? () => dispatch(navActions.chat())
              : () => dispatch(navActions.main())
          }
          // onClick={chats ? chats_() : main_()}
        />
        <img src="/econnectLogo.png" alt="" className="h-8 sm:h-7" />
      </div>

      <ul className="flex items-center lg:hidden">
        <li className="text-secondary italic font-bold">Download Now</li>
        <li>
          <img
            src="/GooglePlayStore.png"
            alt="google play"
            className="h-8 ml-4"
          />
        </li>
        <li>
          <img src="/Appstore.png" alt="app store" className="h-8 ml-4 " />
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;

import React from "react";
import PopUp from "./PopUp";
import Modal from "./Modal";
import { Link } from "react-router-dom";
const Header = ({ popUpOpen, setPopUpOpne }) => {
  return (
    <header className="wrapper_header">
      <div className="left_header">
        <button className="wrapper_header_button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="25px"
            viewBox="0 0 24 25"
            version="1.1"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-subscribe" fillRule="nonzero">
                <circle id="Oval" fill="#4C75A3" cx="7" cy="7" r="7" />
                <circle
                  id="Oval-Copy-2"
                  fill="#3B5999"
                  cx="18.5"
                  cy="18"
                  r="5.5"
                />
                <circle
                  id="Oval-Copy-3"
                  fill="#55ACEE"
                  cx="4.38110636"
                  cy="20.5"
                  r="3.61889364"
                />
              </g>
            </g>
          </svg>
          <span className="subsribe">Подпишись</span>
        </button>
        <label className="switch">
          <input type="checkbox" className="switch__input" />
          <span className="switch__slider">
            <svg
              className="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="25px"
              height="25px"
            >
              <path d="M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 Z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 Z M 16 9 C 12.144531 9 9 12.144531 9 16 C 9 19.855469 12.144531 23 16 23 C 19.855469 23 23 19.855469 23 16 C 23 12.144531 19.855469 9 16 9 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 Z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z" />
            </svg>
            <svg
              className="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
              height="25px"
            >
              <radialGradient
                id="w~INujfpQanMh___D7Au2a"
                cx="24"
                cy="24"
                r="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".724" stopColor="#ffed54" />
                <stop offset=".779" stopColor="#ffe649" />
                <stop offset=".877" stopColor="#ffd22d" />
                <stop offset="1" stopColor="#ffb300" />
              </radialGradient>
              <path
                fill="url(#w~INujfpQanMh___D7Au2a)"
                d="M24,2l1.421,1.474c0.93,0.965,2.388,1.196,3.571,0.566l1.807-0.963l0.896,1.841	c0.586,1.205,1.902,1.876,3.222,1.641l2.016-0.357l0.283,2.028c0.185,1.328,1.229,2.371,2.557,2.557l2.028,0.283l-0.357,2.016	c-0.234,1.32,0.436,2.635,1.641,3.222l1.841,0.896l-0.963,1.807c-0.631,1.183-0.4,2.641,0.566,3.571L46,24l-1.474,1.421	c-0.965,0.93-1.196,2.388-0.566,3.571l0.963,1.807l-1.841,0.896c-1.205,0.586-1.876,1.902-1.641,3.222l0.357,2.016l-2.028,0.283	c-1.328,0.185-2.371,1.229-2.557,2.557l-0.283,2.028l-2.016-0.357c-1.32-0.234-2.635,0.436-3.222,1.641l-0.896,1.841l-1.807-0.963	c-1.183-0.631-2.641-0.4-3.571,0.566L24,46l-1.421-1.474c-0.93-0.965-2.388-1.196-3.571-0.566l-1.807,0.963l-0.896-1.841	c-0.586-1.205-1.902-1.876-3.222-1.641l-2.016,0.357l-0.283-2.028c-0.185-1.328-1.229-2.371-2.557-2.557l-2.028-0.283l0.357-2.016	c0.234-1.32-0.436-2.635-1.641-3.222l-1.841-0.896l0.963-1.807c0.631-1.183,0.4-2.641-0.566-3.571L2,24l1.474-1.421	c0.965-0.93,1.196-2.388,0.566-3.571l-0.963-1.807l1.841-0.896c1.205-0.586,1.876-1.902,1.641-3.222l-0.357-2.016l2.028-0.283	c1.328-0.185,2.371-1.229,2.557-2.557l0.283-2.028l2.016,0.357c1.32,0.234,2.635-0.436,3.222-1.641l0.896-1.841l1.807,0.963	c1.183,0.631,2.641,0.4,3.571-0.566L24,2z"
              />
              <linearGradient
                id="w~INujfpQanMh___D7Au2b"
                x1="8.092"
                x2="35.996"
                y1="8.092"
                y2="35.996"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fed100" />
                <stop offset="1" stopColor="#e36001" />
              </linearGradient>
              <path
                fill="url(#w~INujfpQanMh___D7Au2b)"
                d="M24,7C14.611,7,7,14.611,7,24s7.611,17,17,17s17-7.611,17-17S33.389,7,24,7z"
              />
            </svg>
          </span>
        </label>
      </div>

      <Link to="/">
        <img
          className="logo"
          src="https://rezka.ag/templates/hdrezka/images/hdrezka-logo.png"
          alt="log"
        />
      </Link>

      <div className="right_header">
        <ul>
          <li onClick={() => setPopUpOpne(true)}>Вход</li>
          <Link to="/registration">
            <li onClick={() => console.log("reg")}>Регистрация</li>
          </Link>
        </ul>
      </div>

      {popUpOpen && (
        <PopUp title="Вход на сайт" closePop={setPopUpOpne}>
          <Modal />
        </PopUp>
      )}
    </header>
  );
};

export default Header;

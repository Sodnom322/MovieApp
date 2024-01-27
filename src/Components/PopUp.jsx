import React, { Children } from "react";

const PopUp = ({ title, popUp, children, closePop }) => {
  return (
    <>
      <div className="black_background" onClick={() => closePop(false)}></div>
      <div className="pop_up">
        <div className="sign_in">
          <h3>{title}</h3>
          <svg
            onClick={() => closePop(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="30px"
            height="30px"
          >
            <path
              fill="#F44336"
              d="M21.5 4.5H26.501V43.5H21.5z"
              transform="rotate(45.001 24 24)"
            />
            <path
              fill="#F44336"
              d="M21.5 4.5H26.5V43.501H21.5z"
              transform="rotate(135.008 24 24)"
            />
          </svg>
        </div>
        {children}
      </div>
    </>
  );
};

export default PopUp;

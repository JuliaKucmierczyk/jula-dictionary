import React from "react";
import { BsBook, BsMoon, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const [flexSwitchCheckDefault, setFlexSwitchCheckDefault] =
    React.useState(false);

  if (flexSwitchCheckDefault === true) {
    document.body.style.backgroundColor = "#BCD2FF";
  } else {
    document.body.style.backgroundColor = "#f1f6ff";
  }

  return (
    <div className="container ">
      <header className="navbar py-3 mb-4 border-bottom">
        <div className=" mb-2 mb-md-0">
          <b className="navbar-brand text-primary">
            <BsBook className="me-2 mb-1" />
            JulaDiki
          </b>
        </div>

        <div className="form-check form-switch ms-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => setFlexSwitchCheckDefault(!flexSwitchCheckDefault)}
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            {flexSwitchCheckDefault === true ? (
              <BsMoonFill className="mb-2 ms-2 me-1 blue" />
            ) : (
              <BsMoon className="mb-2 ms-2 me-1 blue" />
            )}
          </label>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="menu-links d-flex align-items-center px-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending_nav px-3"
              : isActive
              ? "active_nav px-3"
              : "text-white pending_nav px-3"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/employee"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending_nav px-3"
              : isActive
              ? "active_nav px-3"
              : "text-white pending_nav px-3"
          }
        >
          Employee
        </NavLink>
      </div>
    </>
  );
}

export default Header;

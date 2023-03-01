/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

const NavBar = () => {
  let links = [
    { path: "/new", element: "New" },
    { path: "/women", element: "Women" },
    { path: "/kids", element: "Kids" },
    { path: "/swim", element: "Swim" },
    { path: "/cashmere", element: "Cashmere" },
    { path: "/stories", element: "Stories" },
    { path: "/sales", element: "Sales" },
    // { path: "/login", element: "Login" },
  ];

  return (
    <div style={{ display: "flex", padding:'7px',justifyContent: "space-around" ,boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>
       <NavLink to='/'><img style={{marginTop:'20px'}} width='100px' src="https://www.jcrew.com/next-static/images/sidecar-modules/navigation/jcrew-logo-fall-21.svg"/></NavLink>
      <div style={{display:'flex',justifyContent:'space-between',width:'40%'}}>
       
        {links.map((ele) => (
          <NavLink
            key={Math.random()}
            to={ele.path}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>{ele.element}</p>
          </NavLink>
        ))}
      </div>
      <div style={{display:"flex", justifyContent:'space-between',width:'25%'}}>
        <input style={{margin:'12px'}} placeholder="Search J.Crew"></input>
        <NavLink to="/signup" style={{textDecoration:'none',color:"black"}}>
          <p>Sign-In</p>
        </NavLink>
        <NavLink to='/cart' ><img src="https://w1.pngwing.com/pngs/720/451/png-transparent-shopping-cart-icon-shopping-bag-tote-bag-icon-design-online-shopping-black-and-white-area-rectangle.png" style={{width:'25px',marginTop:'15px'}}></img></NavLink>
      </div>
    </div>
  );
};

export default NavBar;

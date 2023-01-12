import React from "react";
import Styled from "styled-components";
import {
  AiFillCalendar,
  AiFillBell,
  AiFillCaretDown,
  AiOutlineBell,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import avatarImg from "../../../assets/avatar.jpg";
const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h2>Trang chủ</h2>
      </div>
      <div className="notification">
        <div className="date">
          <AiFillCalendar />
          <span>24 / 9 / 2022</span>
        </div>
        <div className="icon">
          <BiSearch />
          <input type="text" />
          <span>|</span>
          <AiOutlineBell />
          <span>|</span>
          <div className="img">
            <img src={avatarImg} alt="" />
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
const Nav = Styled.nav`
display:flex ;
justify-content : space-between ;
color : white ;
.title {
    h2{
        margin-left:.5rem ;
        color : black ;
        font-weight : 700;
        margin-top:1rem ;
    }
}
.notification {
    display: flex;
    align-items : center ;
        margin-top:-10px ;
    .date {
        display: flex;
    background : #f8f8fe ;
    align-items : center ;
    gap : 1rem ;
    padding: 1rem;
    border-radius : 1rem ;
    svg {
        color : black;
    }
    span {
        color : black
    }
    }
    .icon {
     display: flex;
    align-items : center ;
    gap:1rem;
    padding: 1rem;
    cursor: pointer;
     svg {
        color : black;
    }
    span {
        color : black
    }
    input {
      outline: none;
      border: none;
      padding: 10px 14px;
      border-radius : 5px;
    }
    .img {
         display: flex;
         gap:1rem;
        img {
            height: 2.5rem;
            width: 2.5rem;
            border-radius:3rem ;
        }
    }
    }
}
`;

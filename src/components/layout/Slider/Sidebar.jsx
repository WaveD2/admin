import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import {
  AiOutlineAppstore,
  AiOutlineMessage,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
  AiFillCodeSandboxCircle,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiFillPieChart,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { GiGreenPower } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <div>
      <Section>
        <div className="top">
          <div className="brand">
            <AiFillCodeSandboxCircle />
            <span>WaveD</span>
          </div>

          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(1);
                }}>
                <a href="#">
                  <AiOutlineAppstore />
                  <span className="border">Trang chủ</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(2);
                }}>
                <a href="#">
                  <AiOutlineShoppingCart />
                  <span className="border">Đơn hàng</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(3);
                }}>
                <a href="#">
                  <AiOutlineShopping />
                  <span className="border">Sản phẩm</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(4);
                }}>
                <a href="#">
                  <AiFillPieChart />
                  <span className="border">Doanh số</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(5);
                }}>
                <a href="#">
                  <AiOutlineUsergroupAdd />
                  <span className="border">Nhóm</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(6);
                }}>
                <a href="#">
                  <AiOutlineMessage />
                  <span className="border">Tin nhắn</span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(7);
                }}>
                <a href="#">
                  <AiFillSetting />
                  <span className="border">Cài đặt</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <AiOutlineLogout />
            <span>Đăng xuất</span>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Sidebar;
const Section = Styled.section`
  position: fixed;
  left: 0;
  background-color: #f8f9ef;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.2rem;
  .top {
    display: flex;
    flex-direction : column ;
    gap: 1.2rem ;
    width: 100%;
    .brand {
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  svg {
  color : blue ;
  font-size : 2rem;
   }
   
span {
  font-size : 1.5rem ;
  font-weight : 800 ;
  color : black ;
  margin-left:10px ;
}
}
.links {
  display: flex;
  justify-content: center;
  ul {
    list-style-type : none ;
    display: flex;
    flex-direction : column ;
    gap : .4rem ;
   transition : 1s linear ;
    li {
     padding: .6rem 2rem;
     border-radius : .3rem;
     background: #4c3d3d;
     a {
      text-decoration : none ;
      display: flex;
      gap:1rem ;
      svg {
        color : #fff ;
        font-size : 1.4rem
      }
      span {
        display: flex;
        align-items : center ;
        gap : 2rem ;
        color : #fff;
        font-weight: 600;
      }
     }
    }
    .active {
      background: black;
        color: #fff;

    }
  }
}
}
 .map {
  width: 90%;
  display: flex;
 flex-direction: column;
    margin: 0 auto;
    background: hsl(0deg 12% 27%);
    color: hsl(0deg 0% 100%);
    border-radius: .3rem;
    svg {
       font-size: 1.4rem;
    margin: 4px auto;
    }
    span {
    text-align: center;
    margin-bottom: 10px;
    }
 }
 .logout {
    margin: 0 auto;
    background: hsl(0deg 12% 27%);
    padding: 0.4rem 1rem;
    border-radius: 8px ;
 a {
  text-decoration: none;
      font-size: 1.2rem;
      display: flex;
    align-items: center;
       color: #fff;
     font-weight: 700 ;
    span {
margin-left:10px ;
    }
 }
 }
`;

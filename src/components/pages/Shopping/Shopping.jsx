import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

function Shopping() {
  return (
    <Section>
      <div className="shopping ">
        <div className="design ">
          <div className="logo img1">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="total ">
          <h6>Áo, quần </h6>
        </div>
        <div className="number ">
          <h6>12302 lượt xem sản phẩm</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">146 sản phẩm đã bán</span>
        </div>
      </div>
      <div className="shopping ">
        <div className="design ">
          <div className="logo img2">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="total ">
          <h6>Đồng hồ</h6>
        </div>
        <div className="number ">
          <h6>10893 lượt xem sản phẩm</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">67 sản phẩm đã bán</span>
        </div>
      </div>
      <div className="shopping ">
        <div className="design ">
          <div className="logo img3">
            <AiOutlineTeam />
          </div>
        </div>
        <div className="total ">
          <h6>Túi xách</h6>
        </div>
        <div className="number ">
          <h6>78691 lượt xem sản phẩm</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">324 sản phẩm đã bán</span>
        </div>
      </div>
      <div className="shopping ">
        <div className="design ">
          <div className="logo img4">
            <AiOutlineShopping />
          </div>
        </div>
        <div className="total ">
          <h6>Dày dép</h6>
        </div>
        <div className="number ">
          <h6>1032 lượt xem sản phẩm</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">48 sản phẩm đã bán</span>
        </div>
      </div>
    </Section>
  );
}

export default Shopping;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .shopping {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 1rem;
    color: black;
    background-color: #f8f9fe;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #d4e0ff;
      color: black;
      svg {
        color: black;
      }
    }
    .design {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .img1 {
        background-color: #668dff;
      }
      .img2 {
        background-color: #ffb2c3;
      }
      .img3 {
        background-color: #ffdd00;
      }
      .img4 {
        background-color: #030303;
      }
      .logo {
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.8rem;
        svg {
          font-size: 1rem;
          color: white;
        }
      }
    }
    .total {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-evenly;
      margin-top: 10px;
      h6 {
        color: grey;
      }
    }
    .number {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-evenly;
      margin-top: 10px;
      .svg1 {
        color: green;
      }
      .t1 {
        color: green;
      }
      h6 {
        color: black;
      }
    }
  }
`;

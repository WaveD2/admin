import React from "react";
import styled from "styled-components";
function Add() {
  return (
    <Section>
      <div className="btn">
        <button>Thêm mục sản phẩm</button>
      </div>
    </Section>
  );
}

export default Add;
const Section = styled.section`
  display: flex;
  gap: 1rem;
  .btn {
    margin: 10px auto;
    button {
      border-radius: 0.5rem;
      padding: 1rem 6.6rem;
      border: none;
      cursor: pointer;
      background-color: black;
      color: white;
      font-weight: bold;
      &:hover {
        background-color: #333;
      }
    }
  }
`;

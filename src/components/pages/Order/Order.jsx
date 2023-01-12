import React from "react";
import styled from "styled-components";
import car from "../../../assets/car.jpg";
function Orders() {
  return (
    <Section>
      <div className="orders">
        <div className="orders__details">
          <div>
            <h4>Sản phẩm tuần bán chạy </h4>
          </div>
          <div>
            <button>Xem thêm</button>
          </div>
        </div>
        <div className="orders__table">
          <table>
            <tr>
              <th>ID</th>
              <th>Tên sản phầm</th>
              <th>Ngày</th>
              <th>Gía tiền</th>
              <th>Trạng thái</th>
            </tr>
            <tr>
              <td>#98</td>
              <td className="img">
                <img src={car} alt="" />
                <span>Áo</span>
              </td>
              <td> 29/11/2022</td>
              <td>150.000 đồng</td>
              <td>
                <button>Xem chi tiết</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Section>
  );
}

export default Orders;
const Section = styled.section`
  .orders {
    color: black;
    width: 100%;
    .orders__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: white;
          color: #668dff;
          font-weight: bold;
        }
      }
    }
    .orders__table {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      table {
        border-collapse: collapse;
        width: 100%;
        th,
        td {
          text-align: center;
          padding: 5px;
          justify-content: space-evenly;
          button {
            border-radius: 0.3rem;
            padding: 0.4rem 1rem;
            border: none;
            cursor: pointer;
            background-color: #eef4ff;
            color: blue;
            font-weight: bold;
          }
          img {
            height: 2rem;
            width: 2rem;
          }
          span {
            line-height: 2rem;
            margin-top: 0.2 rem;
          }
        }
        .img {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

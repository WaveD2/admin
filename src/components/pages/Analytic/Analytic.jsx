import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { dataAnalytics } from "../../data";
function Analytic() {
  return (
    <Section>
      <div className="analytics">
        <div className="analytics__details">
          <div>
            <h4>Bảng doanh thu theo tuần</h4>
          </div>
          <div>
            <button>Xem chi tiết</button>
          </div>
        </div>
        <div className="analytics__graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={dataAnalytics}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
              <Tooltip cursor={true} />
              <AreaChart
                animationBegin={800}
                animationDuration={2000}
                type="monotone"
                dataKey="data"
                stroke="#ffc107"
                fill="#ffeaa7"
                strokeWidth={4}
              />
              <Area
                type="monotone"
                dataKey="data"
                stroke="#668DFF"
                fill="url(#colorview)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
}

export default Analytic;
const Section = styled.section`
  .analytics {
    color: black;
    width: 100%;
    .analytics__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #eef4ff;
          color: black;
        }
      }
    }
    .analytics__graph {
      height: 10rem;
      width: 100%;
      .recharts-default-tooltip {
        background-color: black !important;
        border-color: black !important;
        color: white !important;
      }
    }
  }
`;

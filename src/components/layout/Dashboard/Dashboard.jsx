import React from "react";
import Styled from "styled-components";
import Add from "../../pages/Add/Add";
import Analytic from "../../pages/Analytic/Analytic";
import Navbar from "../../pages/Navbar/Navbar";
import Order from "../../pages/Order/Order";
import Sales from "../../pages/Sale/Sales";
import Shopping from "../../pages/Shopping/Shopping";
import Static from "../../pages/Static/Static";
const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="grid_1">
          <Static />
          <Sales />
          <Order />
        </div>
        <div className="grid_2">
          <Analytic />
          <Shopping />
          <Add />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = Styled.section`
margin-left : 18vw ;
padding : 2rem ;
height : 100% ;
.gird {
  display : gird ;
  gird-template-columns : 70% 28% ;
  gap:2rem;
  margin-top:2rem ;
  .gird_1 {
    z-index : 2 ;
    width: 100%;
  display: flex;
   flex-direction : column;
gap : 1rem ;
  }
  .grid_2 {
    z-index : 2 ;
  display: flex;
   flex-direction : column;
gap : 1rem ;
  }
}
`;

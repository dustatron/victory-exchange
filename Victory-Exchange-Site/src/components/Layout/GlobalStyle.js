import styled from 'styled-components';

export const GlobalStyel = {
  shadow: '0px 8px 10px rgba(0, 0, 0, 0.1);',
  shadowDark: '0px 8px 10px rgba(0, 1, 1, 1);',
  lightGrey: '#f3f5f7',
  white: '#fff',
  orange: '#ffa72a',
  green: '#b2e571',
  corners: '8px'
};

export const MenuBox = styled.div`
  background-color: ${GlobalStyel.white};
  box-shadow: ${GlobalStyel.shadow};
  width: 100%;
  height: 35vh;
  padding: 15px 20px;
  border-radius: ${GlobalStyel.corners};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid black;
  margin: 20px 0;
  font-size: 1.3rem;
  cursor: pointer;
  justify-content: center;
`;

export const GridLayout = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
`;

export const LeftMenu = styled.div`grid-area: 1 / 1 / 2 / 2;`;
export const RightBody = styled.div`grid-area: 1 / 2 / 2 / 4;`;

import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 400px;
 
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius:10px;

  background-color:white;
  top: 80px;
  right: 1%;
  z-index: 5;

  button {
    margin-top: auto;
    background-color: #148bdb;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

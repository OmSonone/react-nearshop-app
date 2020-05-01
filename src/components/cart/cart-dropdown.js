import React from "react";
import CustomButton from "../form/custom-button.component.jsx";
import "./cart-dropdown.styles.jsx";
// import {push} from 'redux'

import {
  CartDropdownContainer,
  //EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, closeCart }) => (
  <CartDropdownContainer className=" br2">
    <CartItemsContainer></CartItemsContainer>
    <CustomButton
      className=" br2 hover-bg-blue f2 grow"
      inverted={false}
      //onClick={() => {
      // closeCart();
      //push('/shop');
      //}}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

export default CartDropdown;

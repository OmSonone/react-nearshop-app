import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart.actions";
import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<CartContainer>
			<ShoppingIcon />
			<ItemCountContainer>0</ItemCountContainer>
		</CartContainer>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

import React from "react";
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart.selectors';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart.actions";
import {
	// CartContainer,
	ShoppingIcon
	// ItemCountContainer,
} from "./cart-icon.styles";


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon pointer grow' onClick={toggleCartHidden}>
    <ShoppingIcon className='shoppinsssg-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

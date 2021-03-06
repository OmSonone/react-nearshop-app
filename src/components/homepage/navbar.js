import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { connect } from "react-redux";
import CartIcon from "../cart/cart-icon.jsx";
import CartDropdown from "../cart/cart-dropdown";
import "./navbar.styles.css";
const Navbar = ({ currentUser, hidden }) => {
	return (
		<nav className="flex justify-between justify-content">
			<div className="pa3 mr5">
				{currentUser ? (
					<div className="flex   pa2 justify-content">
						<div className="  f4 black pa2 ph2 ">{` ${currentUser.displayName}`}</div>
					</div>
				) : (
					<div className="flex justify-between pa3">
						<div className="f4   black pa2  ">not signed in</div>
					</div>
				)}
			</div>

			<div className=" title pa2 flex ph4 items-center">
				<Link
					to="/"
					className="nearshop f1  b grow mh2 no-underline"
				>
					NEARSHOP
				</Link>
			</div>

			<div className="link hover-black no-underline flex items-center ">
				<div className=" tc">
					{currentUser ? (
						<div
							className=" f4 dib  pa2 ma2 bg-animate hover-bg-orange pointer hover-white no-underline pv2 ph4   ph2 br2 "
							onClick={() => auth.signOut()}
						>
							{" "}
							signout
						</div>
					) : (
						<Link
							to="/signin"
							className="f4 dib  justify-content hover-bg-blue pointer hover-white no-underline pv2 ph4  ph2 mr2 br2"
						>
							signin
						</Link>
					)}
					<Link
						to="/signup"
						className="f4 dib bg-animate hover-bg-green pointer hover-white no-underline pv2 ph4   b--green-20 ph2 br2"
					>
						signup
					</Link>
				</div>

				<div className="flex ph2 p2 mh1">
					<CartIcon />
				</div>
				{!hidden ? <CartDropdown className=" br 2" /> : null}
			</div>
		</nav>
	);
};
const mapStatetoProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});
export default connect(mapStatetoProps)(Navbar);

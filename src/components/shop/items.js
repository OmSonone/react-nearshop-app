import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
	const { id, name, item } = props;

	return (
		<div className="bg-orange mh6 br2 pa3 ma3  bw2 shadow-5 flex justify-between">
			<div>
				<h2>{name}</h2>

				<h3>{item}</h3>

				<Link
					to="shop"
					className="f5 dib bg-animate hover-bg-blue pointer hover-white no-underline pv2 ph4   ba b--blue-20   br2"
				>
					add item
				</Link>
				<Link
					to="/shop"
					className="f5 dib bg-animate hover-bg-red pointer hover-white no-underline pv2 ph4   ba b--red-20   br2"
				>
					remove item
				</Link>
			</div>
		</div>
	);
};
export default Items;

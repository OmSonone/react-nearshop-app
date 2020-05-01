import React from "react";
import Items from "./items";

const Itemlist = ({ robots }) => {
	const cardcomponent = robots.map((user, i) => {
		return (
			<Items
				key={i}
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
			/>
		);
	});
	return <div>{cardcomponent}</div>;
};
export default Itemlist;

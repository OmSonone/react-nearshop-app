import React from "react";

const Search = ({ searchfield, searchchange }) => {
	return (
		<div className="ma2 b--green br2  w-50 bg-lightest-blue flex justify-content center">
			<input
				type="search"
				placeholder="search shops or categories"
				className="pa2 ba  br3  bg-lightest-blue w-100"
				onChange={searchchange}
			/>
		</div>
	);
};
export default Search;

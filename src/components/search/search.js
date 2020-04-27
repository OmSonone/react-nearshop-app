import React from 'react';

const Search =({searchfield,searchchange})=>{
	return(
		<div className ='pa2'>
		<input type='search' placeholder = 'search shops or categories'
		 className ='pa2 ba b--green br3  bg-lightest-blue'
		 onChange={searchchange}/>

		</div>);

}
export default Search;
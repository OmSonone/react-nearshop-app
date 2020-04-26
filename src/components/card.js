import React from 'react';
import {Link} from 'react-router-dom';




const Card =(props)=>{
	const {id,name,email}=props;


	return(
		<div className='bg-light-green dib br2 pa3 ma2  bw2 shadow-5 tc'>
			<img className="br-100 shadow grow dib  " alt='robo' src={`https://robohash.org/${id}?100*100`} />
				<div>
				<h2>{name}</h2>
				<h3>{email}</h3>
				 <Link to ='/shop'  className="f6 grow no-underline br-pill ba ph3  pv2 mb2 dib near-black"  >SHOW MORE</Link>
			 
				</div>
		</div>

		);
}
export default Card;
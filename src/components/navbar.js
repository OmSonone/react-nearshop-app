import React from 'react'
import {Link} from 'react-router-dom';
import {auth} from '../firebase/firebase.js';
import {connect} from 'react-redux';
import CartIcon from './cart-icon.jsx';
import CartDropdown from './cart-dropdown'
  


const Navbar =( {currentUser,hidden})=>{

 
return (

	<nav className="flex justify-between   bg-light-gray">
		  
		  <div className="flex-grow pa2 flex items-center  ">

          
		 
		  <Link to ='/'  className="f2  blue	 grow mr4-ns pointer no-underline" >NEARSHOP</Link>
	 
		  
		    
		  </div>
		  <div className='pa3'>
		  {
			  	  currentUser ?
			  	 <div className="flex justify-between pa2">
			  	 	 <img  alt="user icon " className="pointer br-100 b--green   ba h2 w2 dib shadow" src="https://img.icons8.com/color/96/000000/user.png"/>
			  	 	<div className="  f4 black pa2 ph2 ">{` ${currentUser.displayName}`}</div> 	  	 
			  	 </div>
			  	 
			  	 :
			  	 <div className="flex justify-between pa3">
			  	  <img alt="user icon " className="pointer br-100 b--red  ba h2 w2 dib grow" src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"/>
			  	 <div className="f4   black pa2  ">not signed in</div>
			  	 </div>
	           }
	           </div>



		  


		  <div className="link  red-60 hover-black no-underline flex items-center pa2 ph2"  >
			  <div className=" tc">
			  {
		  	currentUser ?
		  	<div  className=" f5 dib  pa2 ma2 bg-animate hover-bg-orange pointer hover-white no-underline pv2 ph4  ba b--red-20 ph2 br2 " onClick={()=>auth.signOut()}> signout</div>
		  	:
		  	<Link to='/signin'  className="f5 dib bg-animate hover-bg-blue pointer hover-white no-underline pv2 ph4   ba b--blue-20 ph2 br2">signin</Link>

		  }
		  <Link to ='/signup'  className="f5 dib bg-animate hover-bg-green pointer hover-white no-underline pv2 ph4   ba b--green-20 ph2 br2"  >signup</Link>
	 				
	 		   </div>

	 		   <div className="flex ph2 p2 mh1">
	 		   <CartIcon/>

	 		   
	 		   </div>
	 		   {
	 		   	hidden ?
	 		   	<CartDropdown className=" br 2"/>:null
	 		  
	 		   	 

	 		   }



			  

		  </div>


	</nav>


);
	 }
const mapStatetoProps=({user:{currentUser},cart:{hidden}})=>({
	 currentUser,
	 hidden


 
})
export default connect(mapStatetoProps)(Navbar);
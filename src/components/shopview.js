import React from 'react';
// import { connect } from 'react-redux';
 

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

 const Shopview = ( ) => { 
 	return(<div>
 		<div className="  flex justify-between   bg-light-green" >
 		<h1 className="f2 ph2">SHOPNAME</h1>
 		<input type='search' placeholder = '        search items'
		 className ='  ma3 mh4 ba b--green br3 bg-lightest-blue'
		  />

 		</div>

 		 <CheckoutPageContainer>
    <CheckoutHeaderContainer>

      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
     <CheckoutHeaderContainer>
     </CheckoutHeaderContainer>
      <CheckoutHeaderContainer>
     </CheckoutHeaderContainer>
      <CheckoutHeaderContainer>
     </CheckoutHeaderContainer>
      <CheckoutHeaderContainer>
     </CheckoutHeaderContainer>
    <br/> <br/>    
    <TotalContainer >

      <span>TOTAL: </span>
    </TotalContainer>
    <WarningContainer>
      
    </WarningContainer>
    
  </CheckoutPageContainer>
 		
 	</div>);
 
};

export default Shopview;

 

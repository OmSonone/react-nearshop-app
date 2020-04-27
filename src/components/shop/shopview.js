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
 	return(
    <div>
      
         <div className="  flex justify-between  bg-light-green  br2 pa3 ma2   bw2 shadow-5  " >
             <h1 className="f2 ph2">SHOPNAME</h1>
            <input type='search' placeholder = '        search items'
             className ='  ma3 mh4 ba b--green br3 bg-lightest-blue'
              />

           </div>
           <div className=' bg-light-green  br2 pa3 ma2   bw2 shadow-5  tc'>

     <CheckoutPageContainer>
      <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Sl.No</span>
      </HeaderBlockContainer>

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
         
 
    <TotalContainer >

      <span>TOTAL: </span>
    </TotalContainer>
    <WarningContainer>
      
    </WarningContainer>
    
     </CheckoutPageContainer>
    
  </div>
    </div>
    );
 
};

export default Shopview;

 

import React from "react";
import { connect } from "react-redux";
 

//import CustomButton from "../form/custom-button.component";
import { addItem } from "../../redux/cart.actions";

//import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
      <div className="  dib br2   pa3 mh3  bw2 shadow-5 tc card">
      <img
        className="br2 shadow-5 grow dib br3  "
        alt="items"
        src={`${imageUrl} `}
      />
      <div>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <button
          to=""
          onClick={() => addItem(item)}
          className="f6 grow no-underline br-pill  ba  ph3  pv2 ph5 mb1 dib near-black hover-bg-black hover-white shadow-5"
        >
         Add to cart
        </button>
      </div>
    </div>


    
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

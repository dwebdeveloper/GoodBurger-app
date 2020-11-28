import React from 'react';
import Frag from '../../../hoc/Frag';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        })
    return (
        <Frag>
            <h3>Your Order</h3>
            <p>A delcious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Frag>
    );
}

export default orderSummary;
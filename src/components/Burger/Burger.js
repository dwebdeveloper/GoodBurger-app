import React, { useReducer } from 'react';
import '../Burger/Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Below it's just a way to transform an object of key value pairs into an array of burger ingredients
    /*The keys used in the burger builder state have to equal the keys checked in burger ingredients, meat, cheese and bacon. Must have same casing and the same name. Important to create the right ingredients here in the end.*/
    //The burger builder state have to equal the keys


    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    console.log(transformedIngredients);
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;
import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
    <div className='BuildControls'>
       <p>Current Price: <strong>{props.price.toFixed(2)}€</strong></p>
    {controls.map(ctrl => (
        <BuildControl 
            key={ctrl.key} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemove(ctrl.type)}
            disable={props.disabled[ctrl.type]} />
    ))}
      <button
          onClick={props.ordered} 
          className='OrderButton'
          disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
)

export default buildControls
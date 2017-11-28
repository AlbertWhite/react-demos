import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ value, items, onIncrement, onDecrement, onIncrementAsync, getDataAsync }) =>
      <div>
        <button onClick={getDataAsync}>
          Get data from api
        </button>
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
        <div>
          {items.map((item)=>{
            return <div key={item.id}>{item.label}</div>
          })}
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter

export const increment = (howMuch = 1) => ({ type: 'counter/increment', howMuch })
export const decrement = (howMuch = 1) => ({ type: 'counter/decrement', howMuch })
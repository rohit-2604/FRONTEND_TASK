

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action to increment the count
export const increment = () => ({
  type: INCREMENT,
});

// Action to decrement the count
export const decrement = () => ({
  type: DECREMENT,
});

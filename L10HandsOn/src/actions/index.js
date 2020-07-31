export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const inputNumber = () => ({
  type: 'INPUT_NUMBER'
});

export const changeCount = (number) => ({
  type: 'CHANGE_COUNT',
  number
});
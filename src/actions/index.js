export const incrementAmountCoins = (amount) => {
  return {
    type: 'INCREMENT_AMOUNT_COINS',
    amount,
  }
}

export const loop = () => {
  return {
    type: 'LOOP',
  }
}

export const setAmountCoins = (amount) => {
  return {
    type: 'SET_AMOUNT_COINS',
    amount,
  };
}
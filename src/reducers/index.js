// Redux
import { combineReducers } from 'redux'

// Libraries
import BigNumber from 'bignumber.js'

const basePlayerState = {
  lastSaveAt: Date.now(),

  coins: '0',
  coinsPerSec: '1',
  coinsLastSave: '0',

  gems: '0',

  prayers: '0',
  prayersPerSec: '',
  prayersLastSave: '0',

  wishes: 0,
  wishesMax: '100',
  wishesPerSec: '1',
  wishesLastSave: '0',
}

const playerReducers = (playerState = basePlayerState, action) => {
  switch (action.type) {
    // case 'DECREMENT_AMOUNT_COINS':
    //   return {
    //     ...playerState,
    //     amountCoins: playerState.amountCoins + action.amount,
    //   }

    // case 'INCREMENT_AMOUNT_COINS':
    //   return {
    //     ...playerState,
    //     amountCoins: playerState.amountCoins + action.amount,
    //   }

    case 'LOOP':
      // Coins
      let nCoins = BigNumber(playerState.coinsLastSave)
      .add(
        BigNumber(playerState.coinsPerSec)
        .dividedBy(1000)
        .times(Date.now() - playerState.lastSaveAt)
      ).toFixed(0).toString()

      // Wishes
      let nWishes = BigNumber(playerState.wishesLastSave)
        .add(
        BigNumber(playerState.wishesPerSec)
          .dividedBy(1000)
          .times(Date.now() - playerState.lastSaveAt)
        ).toFixed(0).toString()

      return {
        ...playerState,
        coins: nCoins,
        wishes: nWishes,
      }
 
    case 'SET_AMOUNT_COINS':
      return {
        ...playerState,
        amountCoins: action.amount,
      }

    default:
      return playerState
  }
};

const appReducers = combineReducers({
  player: playerReducers,
});

export default appReducers
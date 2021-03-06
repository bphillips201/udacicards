export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function addDeckTitle (title, id) {
  return {
    type: ADD_DECK_TITLE,
    id: id,
    title: title
  }
}

export function addCardToDeck (card, deckId) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
    deckId
  }
}
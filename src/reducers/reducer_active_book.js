import * as BookActions from "../actionTypes/index";

export default function(state = null, action) {
  switch (action.type) {
    case BookActions.BOOK_SELECTED:
      return action.payload;
  }

  return state;
}

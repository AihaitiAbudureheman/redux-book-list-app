import * as BookActions from "../actionTypes/index";

export function selectBook(book) {
  return {
    type: BookActions.BOOK_SELECTED,
    payload: book
  };
}

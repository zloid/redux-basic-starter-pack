export const QUOTE_REQUESTED = "QUOTE_REQUESTED";
export const QUOTE_RECEIVED = "QUOTE_RECEIVED";
export const QUOTE_FAILED = "QUOTE_FAILED";

export default function getQuoteAction() {
  return function(dispatch) {
    dispatch({
      type: QUOTE_REQUESTED
    });

    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: QUOTE_RECEIVED,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: QUOTE_FAILED,
          payload: error
        })
      );
  };
}

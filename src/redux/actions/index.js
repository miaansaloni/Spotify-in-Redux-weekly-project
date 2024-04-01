export const FETCH_DATA = "FETCH_DATA";

export const fetchData = (query) => {
  return (dispatch, getState) => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    fetch(baseEndpoint + query, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then(({ data }) => {
        dispatch({ type: FETCH_DATA, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

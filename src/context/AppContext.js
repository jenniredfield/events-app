import React from "react";
export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
      console.log('action', action)
    switch (action.type) {
      case "LOAD_EVENTS_LIST":
        return { ...state, eventsList: action.eventsList };
      case "LOAD_EVENT_DETAIL":
        return { ...state, eventDetail: action.eventDetail };
      case "LOAD_ARTIST_DETAIL":
        return { ...state, artistDetail: action.artistDetail };
      default:
        return state;
    }
  };
  const [appData, appDispatch] = React.useReducer(reducer, {
    eventsList: [],
    eventDetail: [],
    artistDetail: []
  });
  return (
    <AppContext.Provider value={{ appData, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// setup Data layer
// we need to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is the DATA LAYER
export const StateContext = createContext();

//Build a PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we used inside of a component
export const useStateValue = () => useContext(StateContext);

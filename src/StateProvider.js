import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Provee la herramienta para pasar estos datos de un componente a otro
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState,)} >
        {children}
    </StateContext.Provider>
);

// Nos permite consumir desde cualquier componente los cambios de estado de initialState
export const useStateValue = () => useContext(StateContext);
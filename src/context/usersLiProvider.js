import { createContext, useReducer, useContext } from "react";

const initialState = null;
const dispatchContext = createContext();
const stateContext = createContext();

export default function UsersLiProvider(props) {
  const [state, dispatch] = useReducer(reducerUsers, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}
//[]

export function useGetUsers() {
  return useContext(stateContext);
}

export function useSetUsers() {
  return useContext(dispatchContext);
}

//state = []
export function reducerUsers(state, action) {
  switch (action.type) {
    case "get users": {
      const newUsers = action.payload;
      return newUsers;
    }
  }
}

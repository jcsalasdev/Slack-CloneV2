import { createContext, useReducer, useContext } from "react";

const initialState = null;
const dispatchContext = createContext();
const stateContext = createContext();

export default function UserProvider(props) {
	//state =  []
	const [state, dispatch] = useReducer(reducerFn, initialState);
	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				{props.children}
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}
//[]

export function useGetUser() {
	return useContext(stateContext);
}

export function useSetUser() {
	return useContext(dispatchContext);
}

//state = []
export function reducerFn(state, action) {
	switch (action.type) {
		case "save": {
			const newState = action.payload;
			return newState;
		}
	}
}

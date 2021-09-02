import { createContext, useReducer, useContext } from "react";

const copier = (users) => users.map((users) => ({ ...users }));

const initialState = [];
const dispatchContext = createContext();
const stateContext = createContext();

export default function UsersProvider(props) {
	const [state, dispatch] = useReducer(reducerFn, initialState);
	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				{props.children}
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}

export function useUser() {
	return useContext(stateContext);
}

export function useUserDispatch() {
	return useContext(dispatchContext);
}

export function reducerFn(state, action) {
	switch (action.type) {
		case "save user": {
			const copy = copier(state);
			copy.push(action.payload);
			return copy;
		}
	}
}

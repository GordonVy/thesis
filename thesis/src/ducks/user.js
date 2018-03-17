import { USER_SIGNED_IN } from "../types";

export default function user(state = {}, action = {}) {
	switch (action.type) {
		case USER_SIGNED_IN:
			return action.user;
		default:
			return state;
	}
}
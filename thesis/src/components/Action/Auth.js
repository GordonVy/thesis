import { USER_SIGNED_IN } from "../../types";
import api from "../../api";

export const userSignedIn = user => ({
	type: USER_SIGNED_IN,
	user
});

export const signin = credentials => dispatch =>
	api.user.signin(credentials).then(user => {dispatch(userSignedIn(user))});
import { callApi } from "./utils"

export const fetchSignUp = payload => callApi("/signin", payload)
export const signin = payload => callApi("/signin", payload)

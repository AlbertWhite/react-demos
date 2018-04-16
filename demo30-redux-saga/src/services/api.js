import { callApi } from "./utils"

export const fetchSignUp = payload => callApi("/signup", payload)

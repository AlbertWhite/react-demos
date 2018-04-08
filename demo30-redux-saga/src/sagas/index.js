import * as pageInitialization from "./pageInitialization"
import * as actionTypes from "../constants/actionTypes"

function* watchInitPage() {
  yield takeEvery(actionTypes.INIT_AUTH, pageInitialization.initAuth)
}

export default function* rootSaga() {
  yield [fork(watchInitPage)]
}

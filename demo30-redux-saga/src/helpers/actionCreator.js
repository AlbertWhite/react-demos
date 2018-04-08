export default (type, payload) => {
  console.log("payload", payload)
  return { type, ...payload }
}

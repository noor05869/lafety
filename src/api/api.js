import axios from "axios";
const api = axios.create({
  baseURL: "https://of0ii0wrl1.execute-api.us-east-1.amazonaws.com/stage",
});

export function Signup(data) {
  console.log("persom=nla info-==========", data);
  return api.post("/auth/signup", { ...data });
}
export function Signin(data) {
  console.log("signin-==========", data);
  return api.post("/auth/signin", { ...data });
}
// export function postOtp(data) {
//   console.log("final--------", data);

//   return api.post("v1/verify", { ...data });
// }
// export function postContact(data) {
//   console.log("final--------", data);

//   return api.post("v1/contact", { ...data });
// }
// export function postTraderdata(data) {
//   return api.post("v1/trader/submit", { ...data });
// }
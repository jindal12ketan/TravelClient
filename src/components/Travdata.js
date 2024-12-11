import Constants from "Constants";
const { SERVER_URL } = Constants;

const response = await fetch(`${SERVER_URL}/travdata`, {
  method: "GET",
});
const Travdata = await response.json();
export default Travdata;

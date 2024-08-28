import keys from "@/utils/keys";
import axios from "axios";
const APIKEY = process.env.GOOGLE_API_KEY;
const SIGNUP_URL = `${keys.SignUpUrl}${APIKEY}`;
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const result = await axios.post(SIGNUP_URL, {
        email,
        password,
        returnSecureToken: true,
      });
      res.status(200).json({ message: "success", data: result.data });
    } catch (error) {
      let errormsg;
      errormsg = error?.response?.data.error.message;
      console.log("Error in backund Signup api", errormsg);
      res.status(200).json({ message: "error", data: errormsg });
    }
  }
}

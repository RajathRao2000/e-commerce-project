import keys from "@/utils/keys";
import axios from "axios";
const googleapikey = process.env.GOOGLE_API_KEY;
const SIGNINURL = `${keys.SignInUrl}${googleapikey}`;
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const result = await axios.post(SIGNINURL, {
        email,
        password,
        returnSecureToken: true,
      });
      res.status(200).json({ message: "success", data: result.data });
    } catch (error) {
      let errormsg;
      errormsg = error?.response?.data.error.message;
      console.log("error in backend sign in api", errormsg);
      res.status(200).json({ message: "error", data: errormsg });
    }
  }
}

import client from "@/utils/mongoDB";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = client.db("ECommerce");
      const collection = db.collection("cartlist");
      const query = { email: req.body.email };
      const dblist = await collection.find(query);
      const list = [];
      for await (const doc of dblist) {
        list.push(doc);
      }
      res.status(201).json({ message: "success", data: list });
    } catch (error) {
      console.log("Error in adding getting cart item", error);
    }
  }
}

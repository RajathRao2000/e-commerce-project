import client from "@/utils/mongoDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const database = client.db("ECommerce");
      const collection = database.collection("cartlist");
      const query = { email: req.body.email };
      const dblist = await collection.find(query);
      const list = [];
      for await (const doc of dblist) {
        list.push(doc);
      }
      res.status(201).json({ message: "success", data: list });
    } catch (error) {
      console.log("Error in adding getting cart item", error);
    } finally {
      client.close();
    }
  }
}

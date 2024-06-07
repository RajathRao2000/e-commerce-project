import { MongoClient } from "mongodb";
const uri = process.env.DATABASE_URL;

export default async function handler(req, res) {
  const client = new MongoClient(uri);
  if (req.method === "POST") {
    try {
      const database = client.db("ECommerce");
      const collection = database.collection("cartlist");
      const query = { id: req.body.id };

      const deleteres = await collection.deleteOne(query);

      res.status(201).json({ message: "delete success", data: deleteres });
    } catch (error) {
      console.log("Error in deleting cart item", error);
    } finally {
      client.close();
    }
  }
}

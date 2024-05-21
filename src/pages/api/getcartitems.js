import { MongoClient } from "mongodb";
const uri =
  `mongodb+srv://${process.env.mongodbuser}:${process.env.mongodbps}@cluster0.z25nbll.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;

export default async function handler(req, res) {
  const client = new MongoClient(uri);
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
      // console.log(error);
    } finally {
      client.close();
    }
  }
}

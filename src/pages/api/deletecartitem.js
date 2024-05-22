import { MongoClient } from "mongodb";
const uri =
  `mongodb+srv://${process.env.NEXT_PUBLIC_mongodbuser}:${process.env.NEXT_PUBLIC_mongodbps}@cluster0.z25nbll.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;

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
      // console.log(error);
    } finally {
      client.close();
    }
  }
}

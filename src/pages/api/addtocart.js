import { MongoClient } from "mongodb";
const uri = process.env.DATABASE_URL;
// `mongodb+srv://${process.env.mongodbuser}:${process.env.mongodbps}@cluster0.z25nbll.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;

export default async function handler(req, res) {
  const client = new MongoClient(uri);
  if (req.method === "POST") {
    try {
      const database = client.db("ECommerce");
      const collection = database.collection("cartlist");
      const query = { id: req.body.id };

      const exists = await collection.findOne(query);
      let result;
      if (!exists) {
        result = await collection.insertOne({ ...req.body });
      } else {
        if (req.body.type === "update") {
          result = await collection.updateOne(query, {
            $set: { quantity: exists.quantity + req.body.quantity },
          });
        } else if (req.body.type === "replace") {
          result = await collection.updateOne(query, {
            $set: { quantity: req.body.quantity },
          });
        }
      }
      // console.log(result, "result");
      res.status(201).json({ message: "success", data: result });
    } catch (error) {
      console.log("Error in accessing cart items", error);
    } finally {
      client.close();
    }
  }
}

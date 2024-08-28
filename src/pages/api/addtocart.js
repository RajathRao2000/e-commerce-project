import client from "@/utils/mongoDB";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = client.db("ECommerce");
      const collection = db.collection("cartlist");
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
    }
  }
}

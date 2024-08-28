import client from "@/utils/mongoDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = client.db("ECommerce");
      const collection = db.collection("cartlist");
      const query = { id: req.body.id };

      const deleteres = await collection.deleteOne(query);

      res.status(201).json({ message: "delete success", data: deleteres });
    } catch (error) {
      console.log("Error in deleting cart item", error);
    }
  }
}

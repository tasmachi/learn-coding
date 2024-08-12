import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ishamsiyev094:lDRwSx6uVEi4IGis@backend-db.nzdvl.mongodb.net/?retryWrites=true&w=majority&appName=backend-db";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    //Store it in a database

    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    const ConnectionString=`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.nzdvl.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=backend-db`

    try {
      client = await MongoClient.connect(ConnectionString);
    } catch (error) {
      console.error(error.message)
      res.status(500).json({ message: "Connection to database failed!" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
    }finally {
        if (client){
            client.close()
        }
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;

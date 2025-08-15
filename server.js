const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

app.use(express.json({ extended: false }));
const withdb = async (operation, res) => {
  try {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    const db = client.db("mernblog");
    await operation(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error fetching article" });
  }
};

app.get("/api/articles/:name", async (req, res) => {
  await withdb(async (db) => {
    let articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});
app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  withdb(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    const newComments = articleInfo.comments.concat({ username, text });
    await db
      .collection("articles")
      .updateOne({ name: articleName }, { $set: { comments: newComments } });

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).send(updatedArticleInfo);
  }, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;

const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

app.use(express.json({ extended: false }));
// const articleInfo = {
//   "awais": {
//     comments: [],
//   },
//   "haseeb": {
//     comments: [],
//   },
// };

app.get("/api/articles/:name", async (req, res) => {
  try {
    let articleName = req.params.name;
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");

    const db = client.db("mernblog");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error fetching article" });
  }
});
app.post("/api/articles/:name/add-comments", (req, res) => {
  const { name } = req.params;
  const { username, text } = req.body;
  articleName = req.params.name;
  articleInfo[articleName].comments.push({
    username,
    text,
  });

  res.status(200).send(articleInfo[articleName]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;

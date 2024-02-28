const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const PORT = 8000;



//////Sans persistance de donnees
// const articlesInfo = {
//   "learn-react": {
//     comments: [],
//   },
//   "learn-node": {
//     comments: [],
//   },
//   "learn-flask": {
//     comments: [],
//   }
// }

// app.post("/api/articles/:name/add-comments", (req, res) => {
//   const { username, text } = req.body;
//   const articleName = req.params.name;
//   articlesInfo[articleName].comments.push({ username, text });
//   res.status(200).send(articlesInfo[articleName]);
// });

// Initialize middleware
// we use to have to install body parser but now it is a built in middleware
// function of express. It parses incoming JSON payload
app.use(express.json({ extend: false }));

const withDB = async (operation, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog");
    await operation(db)
    client.close();
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}

app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection("articles").findOne({ "name": articleName });
    return res.status(200).send(articleInfo.json());
  }, res);

});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  withDB(async (db) => {
    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    await db.collection('articles').updateOne({ name: articleName }, { $set: { comments: articleInfo.comments.concat({ username, text }) } });
    const updateArticleInfo = await db.collection('articles').findOne({ name: articleName });
    res.status(200).json(updateArticleInfo);
  }, res);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const app = express();

app.use(bodyParser.json());


const withdb = async(operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('myblog');
        await operations(db);
        client.close();
            } catch (err) {
                res.status(500).json({message:  err.message});
            }
}

app.get('/api/articles/:name', async (req, res) =>{

    withdb(async(db)=>{
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName})
        res.status(200).json(articleInfo);
        // client.close();
    }, res);
     
});
    



app.post('/api/articles/:name/add-comments', (req, res,next) => {

    const { username, text } = req.body;
    const articleName = req.params.name;
    withdb(async (db) => {
        
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        
        await db.collection('articles').updateOne({name: articleName}, {
            $set: {
                comments: articleInfo.comments.concat({username, text}),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(updatedArticleInfo);
    }, res);
});


app.listen(5000, () => console.log('app listening on port 5000!'));
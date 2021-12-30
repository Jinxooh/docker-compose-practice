const express = require('express');
const redis = require('redis');

// create redis client
const client = redis.createClient({ host : "redis-server", port : 6379 });

client.set('number', 0);

const app = express();
app.get('/', (req, res) => {
    client('nubmer', (err, number) => {
        client.set('number', +number + 1)
        res.send(`숫자가 1씩 올라감, ${number}`)
    })
})


app.listen(8080, () => {
    console.log('Server is running');
});


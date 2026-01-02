/* console.log("Hello, world!");
const myfun = (a,b) => a + b;{
    console.log(myfun(15,25));
} */

    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/name', (req, res) => {
        res.send('Welcome Rohit');
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });


    // 1. Create a 
    // 2. Print RKU
    // 3. Create a endpoint which will accept name and last name and print full name.
    // 
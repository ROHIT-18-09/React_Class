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


    // 1. Create a endpoint Student which will print Student Details
    app.get('/student', (req, res) => {
        res.send("Student Details: Name: John Doe, Age: 20, Course: Computer Science");
    })
    // 2. Print RKU
    app.get('/university', (req, res) => {
        res.send("RK University");
    })
    // 3. Create a endpoint which will accept name and last name and print full name.
    app.get('/fullname', (req, res) => {
        const firstName = "Rohit";
        const lastName = "Dabhi";
        res.send(`Full Name: ${firstName} ${lastName}`);
    })
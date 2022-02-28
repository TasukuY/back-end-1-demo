//import express. argument express has to be in string type.
const express = require('express');
const cors = require('cors');
//assign express and cors to variables
const app = express();
//cannot find module cors -> has not installed cors yet

//Middleware
/*
software that acts as a bridge between an operating system or database and applications, especially on a network.
*/
app.use(express.json());  // When we want to be able to accept JSON from frontend.
app.use(cors());

const inventory = ['pizza', 'cake', 'burritos', 'tacos', 'swordfis steak', 'caffeine', 'potatoes', 'Tootsie Rolles', 'Hamburger', 'hot dog'];

app.get('/api/inventory', (req, res) => {
    // console.log(req.query);
    if(req.query.item){
        const filteredItems = inventory.filter((invItem) => {
            return invItem.toLowerCase().includes(req.query.item.toLowerCase());
        })
        return res.status(200).send(filteredItems);
    }else{
        return res.status(200).send(inventory);
    }
})

app.get('/api/inventory/:id', (req, res) => {
    // console.log(req.params);
    let chosenID = +req.params.id;//req.params -> always get a string value from the fronend
    res.status(200).send(inventory[chosenID])
})


//port number + callback
const SERVER_PORT = 5050;

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));

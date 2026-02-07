import express from 'express'
import restaurantRoute from './routes/restaurant.route.js';
const app = express()
const port = 3000
import userRoute from './routes/user.route.js';
import cors from 'cors'

import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://madhavshreyansh_db_user:ZMlVibcnAaj4S8tl@cluster0.nipueqd.mongodb.net/')
    .then(() => { console.log("DB CONNECTED") })
    .catch(() => { console.log("DB NOT CONNECTED") })

app.use(express.json()) //body parsing middleware
app.use(cors()) //passing data btweeen fe and be 

app.get('/', (req, res) => {
    res.send("welcome to root file and thanks")
})

//calling the function here and passing the app 
restaurantRoute(app)
userRoute(app)


app.listen(port, () => {
    console.log(`Server running  in PORT :  ${port}`)
})
// madhavshreyansh_db_user
// ZMlVibcnAaj4S8tl

// {
//     "name": "Pizza Hut",
//     "rating": 4.3,
//     "cuisines":"Pizzas",
//     "deliveryTime":"30-35 mins",
//     "imageUrl": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/98f45661-567b-44d2-adf9-6eef0662b239_435678.JPG",
// }
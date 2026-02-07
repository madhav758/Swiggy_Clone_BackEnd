import restaurantModel from "../models/restaurant.model.js";

//CREATE 
export async function createRestaurant(req, res) {
    try {
        // send data = postman = body = json data
        let { name, rating, cuisines, deliveryTime, imageUrl } = req.body;
        const newRestaurant = await restaurantModel.create({ name, rating, cuisines, deliveryTime, imageUrl }) //returns a promise
        return res.status(201).json({ "newRest.": newRestaurant })
    }
    catch (err) {
        return res.status(500).json('error', err)
    }

}
// READ
export async function fetchRestaurant(req, res) {
    try {
        const data = await restaurantModel.find({}) //returns promise
        if (!data) {
            return res.status(404).json({ "message": "Restaurant not found" })
        }
        return res.status(200).json(data)
    }
    catch (error) {
        return res.status(500).json({ "err": error })
    }
}

// UPDATE
export async function updateRestaurant(req, res) {
    try {
        //    console.log(req.params.id , "req.params"); //path parameter
        // let {name,rating,cuisines,deliveryTime,imageUrl} = req.body
        await restaurantModel.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json("Restaurant Updated");
    }
    catch (error) {
        return res.status(500).json({ "err": error })
    }
}


// DELETE
export async function deleteRestaurant(req, res) {
    try {
        //    console.log(req.params , "req.params");
        await restaurantModel.findByIdAndDelete(req.params.id)
        return res.status(200).json("Restaurant Deleted");
    }
    catch (error) {
        return res.status(500).json({ "err": error })
    }
}
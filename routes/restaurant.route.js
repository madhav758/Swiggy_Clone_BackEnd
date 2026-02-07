import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verify.js";


export default function restaurantRoute(app) {
    app.post('/api/restaurant', createRestaurant);
    app.get('/api/restaurants', verifyToken, fetchRestaurant);
    app.patch('/api/restaurant/:id', updateRestaurant);
    app.delete('/api/restaurant/:id', deleteRestaurant);

}





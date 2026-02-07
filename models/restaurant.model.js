import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: Number,
    cuisines: String,
    deliveryTime: String
});

const restaurantModel = mongoose.model('Restaurants', restaurantSchema);
export default restaurantModel;
import mongoose, { Schema } from 'mongoose';

// Define user schema
var userSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  type: String,
});

// Export Mongoose model
export default mongoose.model('user', userSchema);
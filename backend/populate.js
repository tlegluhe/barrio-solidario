import mongoose from 'mongoose';
import User from './models/user';

const users = [
	{
		name: 'Thomas',
		type: 'student',
	},
	{
		name: 'Pablo',
		type: 'student',
	},
	{
		name: 'Rene',
		type: 'profesor',
	},

];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/barrioSolidarioDB', { useNewUrlParser: true });

// Go through each user
users.map(data => {
	// Initialize a model with user data
	const user = new User(data);
	// and save it into the database
	user.save();
});
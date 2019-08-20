import User from '../models/user';

export const users = (req, res, next) => {
  // Find all users and return json response
  User.find().lean().exec((err, users) => res.json(
    // Iterate through each user
    { users: users.map(user => ({
      ...user
    }))}
  ));
};
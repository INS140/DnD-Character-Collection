const mongoose = require('mongoose')
const User = require('../models/users')
     
let connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
     
// create a user a new user
let testUser = new User({
    username: 'mal666',
    password: 'Password123'
});
     
// save the user to database
testUser.save(function(err) {
    if (err) throw err;
});
    
// fetch the user and test password verification
User.findOne({ username: 'mal666' }, function(err, user) {
    if (err) throw err;
     
    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -&gt; Password123: true
    });
     
    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
});


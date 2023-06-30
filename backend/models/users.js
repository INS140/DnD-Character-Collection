// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const { Schema } = mongoose;
const bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10
const Character = require('./characters.js');


// Schema
    const userSchema = new Schema({
        username: { type: String, required: true, index: { unique: true } },   
        password: { type: String, required: true },
    }, {toJSON: { virtuals: true }})

    userSchema.pre('save', function(next) {
        let user = this;
    
        if (!user.isModified('password')) return next();
    
        // generate a salt to protect from rainbow table attacks
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);
    
            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    });

    userSchema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };

    userSchema.virtual('characters', {
        ref: Character,
        localField: '_id',
        foreignField: 'user'
    })
         
const User = mongoose.model('user', userSchema);
module.exports = User;
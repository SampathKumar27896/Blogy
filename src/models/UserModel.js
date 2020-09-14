const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    user_name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        unique : [true, 'Email id already taken'],
        required : [true, 'Email id must be required'],
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid email address');
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 5,
        trim : true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain "password"')
            }
        }
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }, 
    }]
}, { timestamps : true})

userSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'user_id'
})


userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    console.log(user._id);
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

const User = mongoose.model('User', userSchema);
module.exports = User;
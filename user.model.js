const mongoose = require("./mongoose.service").mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
	},
	{ timestamps: true }
);

userSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

userSchema.set("toJSON", {
	virtuals: true,
});

userSchema.findById = function (cb) {
	return this.model("Users").findOne({ }, cb);
};

const User = mongoose.model("Users", userSchema);

exports.findByEmail = (email) => {
	return User.find({ email: email });
};

exports.findById = () => {
	console.log( "hehestart");

	return User.find().then((result) => {
		result = JSON.stringify(result);
		// console.log( "hehe" ,result);
		return result;
	}).catch((err)=>{
		console.log("not hehe" ,err);
	});

	// return User.findById().then((result) => {
	// 	console.log( "hehe" ,result);
	// 	// result = result.toJSON();
	// 	return result;
	// }).catch((err)=>{
	// 	console.log("not hehe" ,err);
	// });
};

exports.createUser = (userData) => {
	const user = new User(userData);
	return user.save();
};





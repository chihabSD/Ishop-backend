const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String, default:'subscriber' },
  isVerified: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
  cart:{type:Array, default:[]}

  , 
  address: { type: String },
//   wishlist: { type: Object, ref:'Product'},

}, {timestamps:true});

userSchema.set("toJSON", {
  transform: function (doc, ret, opt) {
    // ret["id"] = ret["_id"];
    delete ret["password"];
    delete ret["__v"];
    return ret;
  },
});

module.exports = mongoose.model("User", userSchema);
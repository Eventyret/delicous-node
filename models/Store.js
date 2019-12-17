const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const storeSchema = new mongoose.Schema({
	
});

module.exports = mongoose.model("Store", storeSchema);

const {connect} = require("mongoose");

async function connectDB(){
    try {
        console.log(process.env.MONGO_URI)
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = { connectDB }
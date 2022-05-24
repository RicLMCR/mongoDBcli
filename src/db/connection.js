// Write a connection to mongo db and test it

require("dotenv").config();
const {MongoClient}= require("mongodb");

const client = new MongoClient(process.env.MONGO_URI); //References .env file variable to hide the database info

exports.connection = async () => {
    try {
        await client.connect();
        const db = client.db("Movies"); //creates space in datatbase to store info. Should be called the plural of what you;re putting in
        return db.collection("Movie");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    client,
    connection
};
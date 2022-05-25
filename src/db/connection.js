// Write a connection to mongo db and test it

require("dotenv").config();
const {MongoClient}= require("mongodb");

const client = new MongoClient(process.env.MONGO_URI); //References .env file variable to hide the database info

const connection = async () => {
    try {
        await client.connect();// Connects to database
        const db = client.db("Movies"); //Creates space in database to store info. Should be called the plural of what you're putting in
        return db.collection("Movie");// Put an individual entry (Movie) into the database
    } catch (error) {
        console.log(error);
    }
}

module.exports = {client,connection};
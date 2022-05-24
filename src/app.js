const yargs = require("yargs");
const {
    client,
    connection
} = require("./db/connection");
const {addMovie, listMovies} = require("./utils")

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            // add movie to mongo db
            await addMovie({title:yargsObj.title}, collection)
        } else if (yargsObj.list) {
            //list movies from mongo db
        } else {
            console.log("incorrect command");
            client.close();
        }
    } catch (error) {
        console.error();
    }
    await client.close();
}

app(yargs.argv);

// node src/app.js --add --title "Spiderman"
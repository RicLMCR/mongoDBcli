const yargs = require("yargs");
const {client,connection} = require("./db/connection");
const {addMovie, listMovie, delMovie, updtMovie} = require("./utils")

const app = async (yargsObj) => {
    const collection = await connection();// Retunrs collection for us to manipulate below
    try {
        if (yargsObj.add) {
            // Create functionality. Add movie to mongo db
            await addMovie({title:yargsObj.title, actor:yargsObj.actor}, collection)
        } else if (yargsObj.list) {
            await listMovie(collection);/* Read functionality. List movies from mongo db*/
        } else if (yargsObj.del) {
            await delMovie({title:yargsObj.title}, collection) /* Delete movie function */
        } else if (yargsObj.updt){
            await updtMovie({title: yargsObj.title, newTitle: yargsObj.newTitle},collection);
        } else if(yargsObj.find){
            await findMovie({title: yargsObj.title, actor: yargsObj.actor},collection)
        }
        console.log("incorrect command");
    } catch (error) {
        console.error();
    }
    await client.close();
}

app(yargs.argv);

// node src/app.js --add --title "Spiderman"
// node src/app.js --list
// node src/app.js --del --title "Spiderman"
// node src/app.js --updt --title "Spiderman" --newTitle "Hulk" CHange to include update actor
// node src/app.js --find --title "Spiderman" --actor "Toby Maguire"????
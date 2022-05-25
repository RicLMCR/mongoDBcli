const {
    Compressor
} = require("mongodb");

// Add single movie to the DB
exports.addMovie = async (movieObj, collection) => { //movieObj and collection both need to be passed otherwise they will be classed as undefined
    const response = await collection.insertOne({
        title: movieObj.title,
        actor: movieObj.actor
    });
    if (response.acknowledged) {
        console.log("Succesfully added movie")
        console.log(response);
    } else {
        console.log("Something went wrong")
    }
    console.log(response);
}

// List movies from the DB
exports.listMovie = async (collection) => {
    const movies = await collection.find().toArray();
    console.log(movies)
}

// Delete single movie from the DB
exports.delMovie = async (movieObj, collection) => {
    console.log("1 Succesfully deleted movie")
    const response = await collection.deleteOne({
        title: movieObj.title
    });
    console.log("2 Succesfully deleted movie")
    if (response.deletedCount > 0) {
        console.log("3 Succesfully deleted movie")
        console.log(response);
    } else {
        console.log("4 Something went wrong")
    }
    console.log("5 Succesfully deleted movie")
};

// Change details of single movie
// NOTE: Can also use FIND operator
exports.updtMovie = async (movieObj, collection) => {
    console.log("1 Succesfully updated entry")
    const response = await collection.updateOne({
        title: movieObj.title
    }, {
        $set: {
            title: movieObj.newTitle
        }
    });
    if (response.acknowledged) {
        console.log("2 Succesfully updated entry")
    }
    console.log("3 Succesfully updated entry")
};

// Find single movie or actor
exports.findMovie = async (movieObj, collection) => {
    console.log("1 Succesfully located movie")
    const response = await collection.findOne({
        title: movieObj.title,
        actor: movieObj.actor
    });
    console.log("2 Succesfully located movie")
    if (response.acknowledged) {
        console.log("3 Succesfully located movie")
    } else {
        console.log ("4 Unable to locate movie")
    }
}


//considr making a movie claas with title and actor and static methods built into the class
const { Compressor } = require("mongodb");

exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({
        title: movieObj.title
    });
    if (response.acknowledged){
        console.log("Succesfully added movie")
            console.log(response);
    } else {
        console.log("Something went wrong")
    }
    console.log(response);
}

exports.listMovies = async (collection)=>{
    const response = await collection.find();
    console.log("This works")

}
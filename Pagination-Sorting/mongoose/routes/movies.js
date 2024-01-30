const router = require('express').Router();
const Movie = require("../model/movie")


router.get('/movies' , async (req , res)=>{
    try {
        const page = parseInt(req.query.page) - 1||0;
        const limit = parseInt(req.query.limit)||5;
        const search = req.query.search ||"";
        let sort = req.query.sort||"rating";
        let genre =req.query.genre||"All";


        const genreOptions = [
            "Actions",
            "ROmance",
            "Fantasy",
            "Drama",
            "Crime",
            "Adventure",
            "Thriller",
            "Sci-fi",
            "Music",
            "Family",
        ];

    } catch (error) {
        console.log(error);
        res.status(500).json({error:true,message:"Internal Server Error"});
    }
})


// router.get('/another-route' , (req , res)=>{
//     // router code here
// })

module.exports  = router
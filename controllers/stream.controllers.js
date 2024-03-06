const { model } = require("mongoose");
const streamModel = require("../models/stream.models");

module.exports.Stream = async (req, res) => {
    try {
        const animes = await streamModel.find();
        res.status(200).json(animes);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des utilisateurs." });
    }
}

//  ******************************************************************************************************************** \\
module.exports.createAnime = async (req, res) => {
    console.log(req.body);
    if (!req.body.name || !req.body.authors || !req.body.licence) {
        return res.status(400).json({ message: "Renseignez les champs requis" });
    }
     // Créer l'utilisateur uniquement si toutes les données requises sont présentes
     try {
        const anime = {
            ...req.body
        };
        
        const animeExist = await streamModel.findOne({animename: anime.name})
        if(animeExist){
            console.log('poto')
        }

        const animeData = await streamModel.insertMany(anime);
        console.log(animeData)

        res.status(200).json(anime);
    } catch (error) {
        // Gérer les erreurs liées à la création de l'utilisateur
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
};

// module.exports.getAllanimes = async (req, res) => {
//     try {
//         const animes = await animeModel.find();
//         res.status(200).json(animes);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des utilisateurs :", error);
//         res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des utilisateurs." });
//     }
// };


module.exports.settModifyStream = async (req, res) => {
    if (!req.body.animename || !req.body.password || !req.body.email) {
        return res.status(400).json({ message: "Renseignez les champs requis" });
    }
    try{
        const animeID = req.params.id;
        const  anime = await streamModel.findById(animeID)

        if (!anime) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }
// Modifier les propriétés de l'utilisateur avec les données fournies dans req.body
        anime.name = req.body.name;
        anime.banner = req.body.banner;
        anime.affiche = req.body.affiche;

        // Sauvegarder les modifications
        const updatedanime = await anime.save();

        res.status(200).json(updatedanime);
    } catch (error) {
        console.error("Erreur lors de la récupération de utilisateur :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'utilisateurs." });
    }
}

// module.exports.setLogin = async  (req, res) => {
//     try{

//     }
// }



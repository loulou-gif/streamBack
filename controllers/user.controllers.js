const { model } = require("mongoose");
const UserModel = require("../models/user.models");

module.exports.setUser = async (req, res) => {
    console.log(req.body);
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({ message: "Renseignez les champs requis" });
    }
     // Créer l'utilisateur uniquement si toutes les données requises sont présentes
     try {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        
        const userExist = await UserModel.findOne({username: user.username})
        if(userExist){
            console.log('on est bon')
        }

        const userData = await UserModel.insertMany(user);
        console.log(userData)

        res.status(200).json(user);
    } catch (error) {
        // Gérer les erreurs liées à la création de l'utilisateur
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
};

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des utilisateurs." });
    }
};


module.exports.settModifyUser = async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({ message: "Renseignez les champs requis" });
    }
    try{
        const userID = req.params.id;
        const  user = await UserModel.findById(userID)

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }
// Modifier les propriétés de l'utilisateur avec les données fournies dans req.body
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;

        // Sauvegarder les modifications
        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Erreur lors de la récupération de utilisateur :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'utilisateurs." });
    }
}

// module.exports.setLogin = async  (req, res) => {
//     try{

//     }
// }



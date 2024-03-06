const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);

        // Écoute des événements de connexion et d'erreur
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connecté');
        });
        mongoose.connection.on('error', (err) => {
            console.error('Erreur de connexion à MongoDB:', err);
            process.exit(1); // Arrête l'application en cas d'erreur de connexion
        });

        // Connexion à MongoDB
        await mongoose.connect(process.env.MONGO_URIS);

    } catch (err) {
        console.error('Erreur de connexion à MongoDB:', err);
        process.exit(1); // Arrête l'application en cas d'erreur de connexion
    }
}

module.exports = connectDB;

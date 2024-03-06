const express = require("express");
const { Stream, createAnime } = require("../controllers/stream.controllers");
// const { setUser, getAllUsers, settModifyUser } = require("../controllers/user.controllers");
router = express.Router();

router.get("/", Stream);
router.post("/", createAnime);
// router.put("/:id", settModifyUser);
// router.delete("/:id", (req, res) => {
//     res.json({message: "surpprimer l'id "+req.params.id});
// });

module.exports = router 
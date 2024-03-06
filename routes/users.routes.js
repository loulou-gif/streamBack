const express = require("express");
const { setUser, getAllUsers, settModifyUser } = require("../controllers/user.controllers");
router = express.Router();

router.get("/", getAllUsers);
router.post("/", setUser);
router.put("/:id", settModifyUser);
router.delete("/:id", (req, res) => {
    res.json({message: "surpprimer l'id "+req.params.id});
});

module.exports = router 
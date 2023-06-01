const express = require("express");
const router = express.Router();
const wineryController = require("../controllers/wineryController");

//api/wineries
router.post("/", wineryController.createWinery);
router.get("/", wineryController.getWineries);
router.put("/:id", wineryController.updateWinery);
router.get("/:id", wineryController.getWinery);
router.delete("/:id", wineryController.deleteWinery);

module.exports = router;

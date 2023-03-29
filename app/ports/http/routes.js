const URLController = require("./controllers/URLController");

const router = require("express").Router();

router.post("/api/create", URLController.create);
router.get("/:urlId", URLController.show);
router.get("/api/most-accessed", URLController.mostAccessed);
module.exports = router;
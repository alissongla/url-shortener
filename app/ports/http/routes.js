const URLController = require("./controllers/URLController");
const {responseTimeLogger} = require("./middlewares/responseTimeLogger");
const Url = require("../../infrastructure/database/schemas/Url");

const router = require("express").Router();

router.post("/api/create", URLController.create);
router.get("/:urlId", URLController.show);
module.exports = router;
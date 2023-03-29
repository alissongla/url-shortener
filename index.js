const  dotenv = require("dotenv");
const  express = require("express");
const  shortid = require("shortid");
const  Url = require("./app/infrastructure/database/schemas/Url");
const  utils = require("./app/Util/util");
const { connectDB } = require("./app/infrastructure/config/database")
const router = require("./app/ports/http/routes");
const responseTimeLogger = require("./app/ports/http/middlewares/responseTimeLogger")


dotenv.config();
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
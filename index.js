const  dotenv = require("dotenv");
const  express = require("express");
const { connectDB } = require("./app/infrastructure/config/database")
const router = require("./app/ports/http/routes");

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
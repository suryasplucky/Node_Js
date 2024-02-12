const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/userRoutes");


const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api", v1WorkoutRouter);

app.get("/", (req, res) => {
  const appURL = req.protocol + "://" + req.get("host")+"/api";

  const htmlContent = `
    <div>
      <b>
        <a href="${appURL}/getusers">/userList</a>
      </b>
    </div>
  `;

  res.send(htmlContent);
});


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

  /// *** ADD ***
  // V1SwaggerDocs(app, PORT);
  // *** ADD ***
// const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const apiRouter = require("./api");

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

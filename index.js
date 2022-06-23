const express = require("express");
const YAML = require("yamljs");
const fileUpload = require("express-fileupload");

const app = express();
const port = 8300;

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(express.static(
  path.join(__dirname, "../api-graph/build"))
);

app.post("/getData", async (req, res) => {
  const file = req.files;

  if (!file) {
    res.send({
      status: false,
      message: "Не было загружено ни одного файла",
    });
  }

  const yamlString = new Buffer.from(file.yaml.data).toString();
  const yaml2json = await YAML.parse(yamlString);

  res.send(yaml2json);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

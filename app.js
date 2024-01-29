const express = require("express");
const { obtainProduct } = require("./models/productModels");
const app = express();
const PORT = 3000;
 
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/productos/:id", (req, res) => {
    const productId = req.params.id;
    const product = obtainProduct(productId);
    if(!product) {
        return res.send("No encontrado")};
    res.render("producto",{producto:product});
})

app.listen(PORT, () => {
    console.log(`servidor levantando en http://localhost:${PORT}`)
})




const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const Products = mongoose.model("Products", productSchema);
//getAll
app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});

    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    }
  } catch (error) {}
});
// get by id
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Products.findById(id);
    if (products) {
      res.status(200).send({ message: "succes", data: products });
    } else {
      restart.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//delete
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Products.findByIdAndDelete(id);
    const products = await Products.find({});
    res.status(200).json({
      message: "succes",
      deleteProduct: deleteProduct,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// update data, put
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.replaceOne({ _id: id }, { ...req.body });
    const updateProduct = await Products.findById(id);
    res.status(200).send({
      message: "updated succesfully!",
      data: updateProduct,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// post
app.post("/products", async (req, res) => {
  const newProduct = new Products({ ...req.body });
  try {
    await newProduct.save();
    res.status(201).send({
      message: "created succesfully!",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to db succesfully!");
    app.listen(PORT, () => {
      console.log(`Example app listening on  port: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

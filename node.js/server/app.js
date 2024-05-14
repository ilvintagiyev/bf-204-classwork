const products = require("./db.js")
const bodyParser = require("body-parser");
const uuid = require("uuid")
const cors = require("cors")

const express = require('express')
const app = express()
const port = 4040

console.log(products);

app.get('/', (req, res) => {
  res.send(`<h2>Error 303<h2/>`)
})

app.get("/message", (req, res) => {
  res.json({ message: "hello world" })
})

// get all products 
app.get("/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send({
      data: products,
      error: null,
      message: "success"
    });
  } else {
    console.log("test");
    res.send({ message: "data is empty!" }).status(204);
  }
})
// get product by id
app.get("/products/:id", (req, res) => {
  // const id = req.params.id
  const { id } = req.params;
  const product = products.find((item) => item.id == id)

  if (product) {
    res.status(200).send({
      data: product,
      message: "success"
    })

  } else {
    res.send({ message: "uzgunuz" }).status(404);

  }
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

//delete product by id
app.delete("/products/:id", (req, res) => {
  const { id } = req.params
  const idx = products.findIndex((x) => x.id == id)
  const deleted = products.find((x) => x.id == id);
  if (deleted) {
    products.splice(idx, 1)
    res.json({
      message: " silindi",
      statusCode: 200
    })

  } else {
    res.json({
      message:  "error404",
        statusCode: 404
      })

  }
})
// post

app.post('/products', (req, res) => {
  const { title, price, description, category, image } = req.body
  if (title && price && description && category && image) {
    const newProduct = {
      id: uuid.v4(),
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,

    }
    products.push(newProduct);
    res.send({
      message: 'success',
      data: newProduct
    })
  }
  else {
    res.send({
      message: 'error',
      statusCode: 404
    })
  }

})

// post

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image } = req.body
  const indx = products.findIndex((item) => item.id == id);
  
  const product = {
    id,
    title,
    price,
    description,
    category,
    image
  }
  products.splice(indx,1,product)
  res.send({
    message: 'success',
    data: product
  })
})


// patch 
const product = products.find((item) => item.id === id);

if (title !== undefined) {
  product.title = title
}
if (price !== undefined) {
  product.price = price
}
if (description !== undefined) {
  product.description = description
}
if (category !== undefined) {
  product.category = category
}
if (image !== undefined) {
  product.image = image
}
if (rating !== undefined) {
  product.rating = rating
}

res.status(200)



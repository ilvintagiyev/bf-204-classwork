import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Product from '../../classes/product.js'
import {post} from '../../services/requests.js'


const AddProducts = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    const product = new Product(name , price,  description)
    post("/products",product)
  }

  return (
    <>
      <div>AddProducts</div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <TextField
          required
          id="outlined-required"
          label="name"
          onChange={(e)=>setName(e.target.value)}
        /> <br />
        <TextField
          required
          id="outlined-required"
          label="price"
          onChange={(e)=>setPrice(e.target.value)}
        /> <br />
        <TextField
          required
          id="outlined-required"
          label="description"
          onChange={(e)=>setDescription(e.target.value)}
        /> <br />
        <Button type='submit' variant="contained">Contained</Button>
      </form>
    </>

  )
}

export default AddProducts
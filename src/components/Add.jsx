import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({products}) => {
  // const [employee,setEmployee]=useState({eId:'1',eName:'akhil',eDept:'hr',eLocn:'tvm'})
  const [product,setProduct]=useState(products)
  const [errors, setErrors] = useState({});

  let fetchvalue=(e)=>{

    // console.log(e)
    setProduct({...product,[e.target.name]:e.target.value})

    
  }
  let validate=()=>{
    // alert(employee)
    // console.log(product)
    const newErrors = {};
    if (!product.id) newErrors.id = 'Product ID is required';
    if (!product.productName) newErrors.productName = 'Product Name is required';
    if (!product.description) newErrors.description = 'Description is required';
    if (!product.category) newErrors.category = 'Category is required';
    if (!product.rating) {
      newErrors.rating = 'Rating is required';
    } else if (product.rating < 1 || product.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }
    if (!product.price) {
      newErrors.price = 'Price is required';
      console.log(product.price)
    } else if (isNaN(product.price) || Number(product.price) <= 0) {
      console.log(product.price)
      newErrors.price = 'Price must be a positive number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if(!errors){
      // If no errors, proceed with submission logic
      console.log('Form submitted:', product);
      sendData(product); // Assuming sendData is your function to handle submission
    }
  }
  return ( <div>
    <h2>NEW PRODUCTS</h2>
    {/* <TextField  id="standard-basic" label="Product ID" name='id' 
    value={product.id} 
     variant="outlined" onChange={fetchvalue} className='mb-2'/><br />
    <TextField  id="standard-basic" label="Product Name" variant="outlined" name='productName' className='mb-2'
    value={product.productName} 
     onChange={fetchvalue} /><br />
    <TextField   id="standard-basic" label="Description" variant="outlined" name='description' className='mb-2'
    value={product.description} 
    onChange={fetchvalue}/><br />
    <TextField   id="standard-basic" label="Category" variant="outlined" name='category' className='mb-2'
    value={product.category}
      onChange={fetchvalue}/> <br /><br />
      <TextField  id="standard-basic" label="Rating" name='rating' className='mb-2'
    value={product.rating} 
     variant="outlined" onChange={fetchvalue} /><br />
     <TextField  id="standard-basic" label="Price" name='price' 
    value={product.price} 
     variant="outlined" onChange={fetchvalue} className='mb-2'/><br /> */}
     <form onSubmit={handleSubmit}>
      <TextField
        label="Product ID"
        name="id"
        variant="outlined"
        value={product.id}
        onChange={fetchvalue}
        className='mb-2'
        error={!!errors.id}
        helperText={errors.id}
      /><br />

      <TextField
        label="Product Name"
        name="productName"
        variant="outlined"
        value={product.productName}
        onChange={fetchvalue}
        className='mb-2'
        error={!!errors.productName}
        helperText={errors.productName}
      /><br />

      <TextField
        label="Description"
        name="description"
        variant="outlined"
        value={product.description}
        onChange={fetchvalue}
        className='mb-2'
        error={!!errors.description}
        helperText={errors.description}
      /><br />

      <TextField
        label="Category"
        name="category"
        variant="outlined"
        value={product.category}
        onChange={fetchvalue}
        className='mb-2'
        error={!!errors.category}
        helperText={errors.category}
      /><br />

      <TextField
        label="Rating"
        name="rating"
        variant="outlined"
        value={product.rating}
        onChange={fetchvalue}
        className='mb-2'
        error={!!errors.rating}
        helperText={errors.rating}
      /><br />

      <TextField
        label="Price"
        name="price"
        variant="outlined"
        value={product.price}
        onChange={fetchvalue}
        className='mb-2'
        error={!!errors.price}
        helperText={errors.price}/>
        <br/>
    <Button type='submit' variant="contained">submit</Button> <br />
    </form>
    </div>
  )
}

export default Add
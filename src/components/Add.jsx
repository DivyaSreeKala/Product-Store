import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({products}) => {
  const [employee,setEmployee]=useState({eId:'1',eName:'akhil',eDept:'hr',eLocn:'tvm'})
  const [product,setProduct]=useState(products)
  let fetchvalue=(e)=>{

    // console.log(e)
    setProduct({...product,[e.target.name]:e.target.value})

    
  }
  let sendData=(e)=>{
    // alert(employee)
    console.log(product)
  }
  return ( <div>
    <h2>NEW EMPLOYEE</h2>
    <TextField  id="standard-basic" label="Product ID" name='id' 
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
     variant="outlined" onChange={fetchvalue} className='mb-2'/><br />
    <Button onClick={sendData} variant="contained">submit</Button> <br /></div>
  )
}

export default Add
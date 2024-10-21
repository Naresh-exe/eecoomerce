import TextField from '@mui/material/TextField';
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { useState } from "react";
const LoginPage = () => {
  
    const [inputData,setInput]=useState({
        email:"",
        password:""
    })
    const [formError,setFormError]=useState({
      email:'',
      password:""
    })
    const validateForm=()=>{
      let valid=true
      const newError={...formError}
      if(inputData.email.trim()==""){
        newError.email="This field is required"
        valid=false
      }
      if(inputData.password.trim()==""){
        newError.password="This field is required"
        valid=false
      }
      else if(!isValidEmail(inputData.email)){
        newError.email="Please enter a valid email"
        valid=false

      }
      setFormError(newError)
      return valid
    }
    const isValidEmail=(emali)=>{
      const emailRegrex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegrex.test(emali)
    }
    const handleChange=(e)=>{
      setInput({
        ...inputData,
        [e.target.name]:[e.target.value]
      })
      setFormError({
        ...formError,
        [e.target.name]:""
      })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validateForm()){
          setInput({email:"",password:""})
        }
       

    }
  return (
    <div>
         <Box>
        <Grid
          container
          marginTop={"10%"}
          height={"10%"}
          direction="row"
          maxWidth={"100%"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Paper elevation={3}>
                <div className="row">
                <div className="col p-4 w-25" style={{backgroundColor:"#2874f0",color:"white"}}>
            <h1 className="mb-4">Login</h1>
            <p className="w-50 fw-bolder">Welcome Back!</p>
          </div>
          <div className="col p-4">
            <TextField label="Email " style={{width:"90%"}} variant="outlined" size="medium" required name="email" value={inputData.email} onChange={handleChange} />
            {formError.email&&<p style={{color:"red"}}>{formError.email}</p>}
            <TextField label="Password" style={{width:"90%",marginTop:"5%"}} variant="outlined" size="medium" required name='password' value={inputData.password} onChange={handleChange}  />
            {formError.password&&<p style={{color:"red"}}>{formError.password}</p>}
            <button type="button" className="btn text-white bg-danger mt-5 w-100 p-3 fs-5 fw-bolder" onClick={handleSubmit}><Link to={"/homePage"} className='text-decoration-none text-white'>Login</Link></button>
            <p className=" text-center fw-bold mt-4">New User? <Link to="/" className=" text-decoration-none">Sign Up</Link></p>
          </div>
                </div>
            </Paper>

        </Grid>
      </Box>
      
    </div>
  )
}

export default LoginPage

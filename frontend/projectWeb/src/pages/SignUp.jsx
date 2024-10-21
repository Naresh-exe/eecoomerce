import TextField from '@mui/material/TextField';
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate()
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
    const [formError,setFormError]=useState({
      name:"",
      email:"",
      password:""
    })
    const validateForm=()=>{
      let valid=true
      const newError={...formError}
      if(formData.name.trim()==""){
        newError.name="This field is required"
        valid=false
      }
      if(formData.email.trim()==""){
        newError.email="Please enter your email"
        valid=false
      }
      if(formData.password.trim()==""){
        newError.password="This field is required"
        valid=false
      }
      else if(!isValidEmail(formData.email)){
        newError.email="Please enter a valid email address"
        valid=false
      }
      setFormError(newError)
      return valid
    }
    const isValidEmail=(email)=>{
      const emailRegrex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegrex.test(email)
    }
    const handleChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
      setFormError({
        ...formError,
        [e.target.name]:""
      })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validateForm()){
          console.log(formData)
          navigate("/homePage")
          setFormData({name:"",email:"",password:""})

        }
     

    }
    
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          marginTop={"10%"}
          height={"10%"}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Paper elevation={3}>
                <div className="row">
                <div className="col p-4 w-25" style={{backgroundColor:"#2874f0",color:"white"}}>
            <h1 className="mb-4">SignUp</h1>
            <p className="w-50">Get access to your Orders, Wishlist and Recommendations  </p>
            <img src="https://imgs.search.brave.com/WFGoDVv8vdFJzy_dh-ff8p9HYk-zIEoRFj3irMdIt_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9SZWQt/U2hvcHBpbmctQ2Fy/dC1UcmFuc3BhcmVu/dC5wbmc" className=" img-fluid  " style={{marginTop:"25%"}} width={"100px"}   alt="" />
          </div>
          <div className="col p-4">
            <TextField label="Name" style={{width:"90%",marginTop:"5%"}} variant="outlined" size="medium" required name="name" value={formData.name} onChange={handleChange}  />
            {formError.name&&<p style={{color:"red"}}>{formError.name}</p>}
            <TextField label="Email " style={{width:"90%",marginTop:"5%"}} variant="outlined" size="medium" required name="email" value={formData.email} onChange={handleChange} />
            {formError.email&&<p style={{color:"red"}}>{formError.email}</p> }
            <TextField label="Password" style={{width:"90%",marginTop:"5%"}} variant="outlined" size="medium" required name='password' value={formData.password} onChange={handleChange}  />
            {formError.password&&<p style={{color:"red"}}>{formError.password}</p>}
            <button type="button" className="btn text-white bg-danger mt-5 w-100 p-3 fs-5 fw-bolder" onClick={handleSubmit}><Link to={"/homePage"} className='text-decoration-none text-white'>Submit</Link></button>
            <p className=" text-center fw-bold mt-4">Already a User? <Link to="/login" className=" text-decoration-none">Log In</Link></p>
          </div>
                </div>
            </Paper>

        </Grid>
      </Box>
    </div>
  );
};

export default SignUp;

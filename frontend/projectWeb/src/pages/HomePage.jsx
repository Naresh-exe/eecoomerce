import Grid from '@mui/material/Grid2';
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import { Heading,Text } from "@chakra-ui/react";
import { Button } from '@mui/material';
import Swal from "sweetalert2"
// import { Link } from 'react-router-dom';
const HomePage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/getProducts").then((res) => {
      setList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={4} justifyContent={"center"} sx={3}>
        {list.map((i)=>{
            return (
                <>
                <Grid item key={i._id} spacing={4}>
                    <Paper className='p-4'>
                        <img src={i.image} style={{width:"200px",height:"200px",objectFit:"cover",}} className='mb-4' />
                        <Heading as={"h3"}>{i.name}</Heading>
                        <Text fontWeight={"bold"} fontSize={"xl"}  mb={4}>₹{i.price}</Text>
                        <Button className='mt-4' variant="contained" 
                        onClick={()=>
                        {
                            Swal.fire({
                                title: "SuccessFul!",
                                text: "You purchased the product!",
                                icon: "success"
                              });
                        }
                        }
                      
                          
                        > Buy</Button>

                    </Paper>
                </Grid>

                
                </>
            )
        })}
       
      </Grid>
    </div>
  );
};

export default HomePage;

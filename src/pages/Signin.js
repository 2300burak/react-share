import React from 'react'
import {Button,TextField, Grid, Container} from '@material-ui/core';
import { useFormik } from 'formik';
import firebase from "../firebase/firebase.utils"



function Signin() {
    console.log("firebase",firebase)
    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
          displayname:"",
        },
        onSubmit: values => {
          firebase.login(values.email,values.password);
        },
      });
      console.log(formik)
      const handleWithGoogle = ()=>{firebase.useGoogleProvider()}
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Grid  container spacing={3} >
                    <Grid item xs={12}>
                        <TextField 
                                id="outlined-basic" 
                                label="E-mail" 
                                variant="outlined"
                                onChange= {formik.handleChange}
                                value={formik.values.email}
                                name="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                                id="outlined-basic" 
                                label="Password" 
                                variant="outlined"
                                onChange= {formik.handleChange}
                                value={formik.values.password}
                                name="password" />

                    </Grid>
                 
                    <Grid item xs={12}>
                        
                        <Button type="submit" variant="contained" color="primary" >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12}>

                        <Button variant="contained" color="primary" onClick={handleWithGoogle}>
                            Login with Gooogle
                        </Button>
                    </Grid>
                </Grid> 
            </form>
        </Container>
    )
}

export default Signin

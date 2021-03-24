import React from 'react'
import {Button,TextField, Grid, Container} from '@material-ui/core';
import { useFormik } from 'formik';



function Signup() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
          displayname:"",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      console.log(formik)
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
                        <TextField 
                                id="outlined-basic" 
                                label="Displayname" 
                                variant="outlined"
                                onChange= {formik.handleChange}
                                value={formik.values.displayname}
                                name="displayname" />

                    </Grid>
                    <Grid item xs={12}>
                        
                        <Button type="submit" variant="contained" color="primary" >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={12}>

                        <Button variant="contained" color="primary">
                            Signup with Gooogle
                        </Button>
                    </Grid>
                </Grid> 
            </form>
        </Container>
    )
}

export default Signup

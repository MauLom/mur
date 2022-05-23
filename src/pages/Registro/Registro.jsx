import * as React from "react"

import { Formik } from 'formik';
import { Grid, Stack, TextField, Button, Box } from "@mui/material"

export default function Registro() {
 return (
  <>
   <Grid container sx={{ height: "100%" }}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
     <Stack sx={{ height: "100%" }}>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
        const errors = {};
        if (!values.email) {
         errors.email = 'Required';
        } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
         errors.email = 'Invalid email address';
        }
        return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
        }, 400);
       }}
      >
       {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
       }) => (
        <Box sx={{ height: "100%" }}>
         <form className="h-100" onSubmit={handleSubmit}>
          <Stack
           sx={{ height: "100%" }}
           direction="column"
           justifyContent="center"
           alignItems="center"
           spacing={2}
          >
           <TextField
            error={errors.email === 'Invalid email address' ? true : false}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="Ingresa tu correo electronico"

           />
           {errors.email && touched.email && errors.email}

           <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            label="Ingresa tu contrasena"
           />
           {errors.password && touched.password && errors.password}
           <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            label="Valida tu contrasena"
           />
           {errors.password && touched.password && errors.password}

           <Button variant="contained" type="submit" disabled={isSubmitting}>
            Continuar
           </Button>

          </Stack>



         </form>
        </Box>

       )}
      </Formik>
     </Stack>
    </Grid>
   </Grid>
  </>
 )
}
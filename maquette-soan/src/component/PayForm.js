import * as React from "react";
import {Box, Grid, TextField, withStyles } from '@mui/material/';
import {useState} from "react";


export const PayForm = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs((values) => ({ ...values, [name]: value }));
};

  const styles = theme => ({
    inputRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 2
      }
    },
    input: {
      borderRadius: 3,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #CCCCCC',
      fontSize: 12,
      padding: '6px 8px',
      '&:focus': {
        borderColor: '#80bdff'
      }
    },
    inputLabelRoot: {
      color: '#555555',
      fontWeight: 'bold',
      '&$formLabelFocused': {
        color: '#555555'
      }
    },
    formLabelFocused: {}
  })
  const { classes } = this.props
  return (
    <div className="container">
      <h1>Paiement sécurisé par prélèvement bancaire</h1>
   <Grid
     container
     direction="column"
     justifyContent="center"
     alignItems="center"
     spacing={2}
     >
     <TextField // Nom de la compagnie //
         label="Titulaire du compte"
         id="companyNameId"
         name="companyName"
         variant="standard"
         onChange={handleChange}
         required
         InputLabelProps={{
           shrink: true,
           FormLabelClasses: {
             root: classes.inputLabelRoot,
             focused: classes.formLabelFocused
           }
         }}
         InputProps={{
           disableUnderline: true,
           classes: {
             root: classes.inputRoot,
             input: classes.input
       }
     }}

     />
     <TextField // Nom de la compagnie //
         label="Adresse du titulaire"
         id="companyAddressId"
         name="companyName"
         variant="standard"
         onChange={handleChange}
         required
     />
     <TextField // Nom de la compagnie //
         label="Ville"
         placeholder="Ville"
         id="cityId"
         name="city"
         variant="standard"
         onChange={handleChange}
         required
     />
     <TextField // Nom de la compagnie //
         label="Région"
         placeholder="Région"
         id="regionId"
         name="region"
         variant="standard"
         onChange={handleChange}
         required
     />
     <TextField // Nom de la compagnie //
         label="Code postal"
         placeholder="Code postal"
         id="postalCodeId"
         name="postalCode"
         variant="standard"
         onChange={handleChange}
         required
     />
     <TextField // Nom de la compagnie //
         label="Pays"
         id="countryId"
         name="country"
         placeholder="France"
         variant="standard"
         onChange={handleChange}
         required
     />
     <TextField // Nom de la compagnie //
         label="IBAN"
         placeholder=" ---- ---- ---- ---- ---- ---- ----"
         id="ibanId"
         name="iban"
         variant="standard"
         onChange={handleChange}
         required
     />
    </Grid>

    </div>

  );
}


import React from "react";
import {
    Box,
    Button,
    Grid,
    TextField,
    InputLabel,
    FormControl,
    InputBase,
    styled,
    Paper,
    alpha,
    Modal
} from '@mui/material/';

export const PayForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    };

    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const BootstrapInput = styled(InputBase)(({theme}) => ({
        'label + &': {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3)
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: '1px solid #ced4da',
            fontSize: 12,
            padding: theme.spacing(1),
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]), '&:focus': {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));

    return (
        <div>
            <h1>Paiement sécurisé par prélèvement bancaire</h1>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={1}>
                    <Grid item xl={12}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        id="incumbentNameId"
                                        name="incumbentName"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >Titulaire du compte
                            </InputLabel>
                            <BootstrapInput id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        id="companyAddressId"
                                        name="incumbentAddress"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >Adresse du titulaire</InputLabel>
                            <BootstrapInput id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        placeholder="Ville"
                                        id="cityId"
                                        name="city"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >Ville</InputLabel>
                            <BootstrapInput id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        placeholder="Région"
                                        id="regionId"
                                        name="region"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >Region</InputLabel>
                            <BootstrapInput id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        placeholder="Code postal"
                                        id="postalCodeId"
                                        name="postalCode"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >Code postal</InputLabel>
                            <BootstrapInput id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        id="countryId"
                                        name="country"
                                        placeholder="France"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >Pays</InputLabel>
                            <BootstrapInput id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" // Nom de la compagnie //
                                        placeholder=" ---- ---- ---- ---- ---- ---- ----"
                                        id="ibanId"
                                        name="iban"
                                        variant="standard"
                                        onChange={handleChange}
                                        required
                            >IBAN</InputLabel>
                            <BootstrapInput placeholder=" ---- ---- ---- ---- ---- ---- ----" id="bootstrap-input"/>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}
import * as React from "react";
import TextField from '@mui/material/TextField';

export const makeTextField = (label, id, value, onChange) => {
return (
        <TextField// Prénom //
            label={label}
            id={id}
            value={value}
           variant="standard"
            onChange={onChange}
            required
        />
    )
}

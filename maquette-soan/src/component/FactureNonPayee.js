import {
    CardActions,
    Card,
    CardContent,
    Button,
    Typography,
    Collapse,
    Modal,
    Box,
} from "@mui/material";
import React, { useState } from "react";
import {PayForm} from "./PayForm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius:'5px',

    pt: "2rem",
    px: '5rem',
    pb: 3,
};

export const FactureNonPayee = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div style={{ display: "grid" }}>
            <Card sx={{ minWidth: 275, width: 800, m: 4 }}>
                <Button onClick={handleOpen}>Apply</Button>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 300 }}>
                        <PayForm/>
                    </Box>
                </Modal>
            </Card>
        </div>
    );
}

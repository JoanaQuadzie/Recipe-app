import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography color="inherit" variant="h6" component={Link} to="/recipes" sx={{ flexGrow: 1 }}> 
                Recipe App
                 </Typography>
                <Button component={Link} to="/add-recipe" color="inherit">Add new recipe</Button>
            </Toolbar>
        </AppBar>
    );
}






// Add component={Link} to="/add-recipe" color="inherit" to a button to change it into a link
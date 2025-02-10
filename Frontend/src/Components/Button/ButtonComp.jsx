import {Button} from "@mui/material";


function ButtonComp({value}){
    return(
        <Button variant="contained" color="primary">
            {value}
        </Button>
    )
}

export default ButtonComp;  

import { TextField } from "@mui/material";


function InputBox({placeholder}){
    return(
        <TextField id="outlined-basic" label={placeholder} variant="outlined"  />
    )
}

export default InputBox;
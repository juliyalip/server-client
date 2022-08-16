import { useForm } from 'react-hook-form';
import {Box, TextField, Button} from '@mui/material';
import s from './index.module.css'



function TodoForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
   

    return (
        <form className={s.containerForm}>
             <Box
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        width: '100%',
     

      }}
      noValidate
      autoComplete="off"
    >       
      <TextField fullWidth label="Title" variant="standard" />
      <TextField  label="Text" variant="standard" />
    </Box>

    <Button variant="contained" sx={{marginTop: '20px'}}type="submit">SUBMIT</Button>
        </form>
    )
};

export default TodoForm;
import React, {useState} from 'react';
import { FormControl, Input, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    return(
      <Box component="div" sx={{ display: 'block', padding: '15px', textAlign: 'center',  bgcolor: 'text.secondary'}}>
          <FormControl sx={{display: 'inline-flex', margin: '1px', justifyContent: 'center', flexDirection: 'row', color: 'text.primary', flexWrap: 'nowrap'}}>
            <FormHelperText id="usuario_nome_helper_text" >Usuario:
            <Input id="usuario_nome" aria-describedby="usuario_nome_helper_text" value={usuario} onChange={e => { setUsuario(e.target.value) }} />
            </FormHelperText>
            <FormHelperText id="senha_nome_helper_text">Senha:
            <Input id="senha_nome" aria-describedby="senha_nome_helper_text" value={senha} onChange={e => { setSenha(e.target.value) }} />
            </FormHelperText>
            <Button variant="contained">Login</Button>
          </FormControl>
      </Box>
         
    )
}

export default Login;
import Header from "./components/header";
import MenuDrawer from "./components/MenuDrawer"
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Header />
      <Box p={2}  sx={{ display: 'flex', bgcolor: 'text.secondary', justifyContent: 'center' }}>
      <MenuDrawer />
      </Box>
      <ListarTarefa />
    </div>
  );
}

export default App;

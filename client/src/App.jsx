import React from 'react';
import {

  Routes,
  Route,
} from "react-router-dom";
import  AppBar  from './components/AppBar';
import Container from './components/Container';
import TodosPage from './page/TodosPage';


function App() {
  return (<>
<AppBar />
<Container>
<Routes>
  <Route path="/todos" element={<TodosPage />} />
</Routes>
</Container>
  </>

  );
}

export default App;

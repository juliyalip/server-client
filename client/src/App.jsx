import React from 'react';
import {

  Routes,
  Route,
} from "react-router-dom";
import  AppBar  from './components/AppBar';
import TodosPage from './page/TodosPage';


function App() {
  return (<>
<AppBar />
<Routes>
  <Route path="/todos" element={<TodosPage />} />
</Routes>
  </>

  );
}

export default App;

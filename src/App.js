import logo from './logo.svg';
import './App.css';
import Groups from './view/group/groups';
import Discover from './view/group/discover';
import Categories from './view/group/Categories'
import Product from './view/group/groupPage';
import GroupPage from './view/group/groupPage'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  useParams,
  BrowserRouter,
} from "react-router-dom";

function App() {
  let {id}= useParams();
  return (

    <>
    <Router>
    <Routes>
      
      <Route path='/group/products/:id'element={<GroupPage/>} />
      <Route path='/seemore/products/:id'element={<Product/>} />
      <Route path='/seemore' element={<Categories/>}/>
      <Route path='/discover' element={<Discover/>}/>
      <Route path='/group' element={<Groups/>}/>
      </Routes>
    </Router>
    </>

  );

}

export default App;

import './App.css';
import Groups from './view/group/groups';
import Discover from './view/group/discover';
import Categories from './view/group/Categories'
import GroupPravite from './view/group/groupPage';
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
      
      <Route path='/group/private/:id'element={<GroupPravite/>} />
      <Route path='/discover/private/:id'element={<GroupPravite/>} />
      <Route path='/seemore/private/:id'element={<GroupPravite/>} />
      <Route path='/seemore' element={<Categories/>}/>
      <Route path='/discover' element={<Discover/>}/>
      <Route path='/group' element={<Groups/>}/>
      </Routes>
    </Router>
    </>

  );

}

export default App;

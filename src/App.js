import './App.css';
import Groups from './view/group/groups';
import Discover from './view/group/discover';
import Categories from './view/group/Categories'
import GroupPravite from './view/group/groupPage';
import Discussion from './view/group/discussion';
import DiscussionGroup from './view/group/groupdis';
import Feature from './view/group/feature';
import FeatureGroup from'./view/group/groupfeature';
import About from './view/group/about'
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
    <Route path='/feature/:id' element={<Feature/>}/>
    <Route path='/featuregroup/:id' element={<FeatureGroup/>}/>
      <Route path='/discussion/:id' element={<Discussion/>}/>
      <Route path='/discussiongroup/:id' element={<DiscussionGroup/>}/>
      <Route path='/aboutgroup/:id'element={<GroupPravite/>} />
      <Route path='/about/:id'element={<About/>} />
      <Route path='/seemore' element={<Categories/>}/>
      <Route path='/discover' element={<Discover/>}/>
      <Route path='/feed' element={<Groups/>}/>
      </Routes>
    </Router>
    </>

  );

}

export default App;

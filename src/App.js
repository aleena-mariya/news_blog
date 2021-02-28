import logo from './logo.svg';
import './App.css';
import HomePage from'./pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import ArticlePage from './pages/article/article.component'
import Header from './components/header/header.component'
function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/article" component={ArticlePage}/>
      <Route exact path="/article2" component={ArticlePage}/>
    </div>
  );
}

export default App;

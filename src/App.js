import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './components/Index';
import HomePage from './components/HomePage';
import Movies from './components/Movies'
import MoviesIndex from './components/MoviesIndex';
import MoviePage from './components/MoviePage'
import Faves from './components/Faves'
import LoginPage from './components/LoginPage'
import NoPageFound from './components/NoPageFound';

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([])
  const [watchList, setWatchList] = useState([])
  useEffect( () => {
    fetch('http://localhost:4000/movies')
    .then(response => response.json())
    .then(json => {
        setMovies(json)
    })
}, [])

useEffect( () => {
    loadWatchList();
}, [movies])

function loadWatchList() {
    const savedMovies = movies.filter( (movie) => movie.saved)
    console.log(savedMovies);
    setWatchList(savedMovies);
}

function toggleSave(id, saved) {
    fetch('http://localhost:4000/movies/'+id, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            saved: saved
        })
    })
    .then( response => response.json() )
    .then( json => {
        const updatedMovies = movies.map( (movie) => {
            if(id === movie.id) {
                return json
            } else {
                return movie
            }
        })
        setMovies(updatedMovies);

        if(saved) {
            setWatchList( (prev) => [...prev, json])
        } else {
            const filteredWatchList = watchList.filter( (movie) => movie.id !== id)
            setWatchList(filteredWatchList);
        }
    })
}
  return (
    <>

      {/* 
        Create the following routes:
        / - index page, main parent route
        /movies - renders <MoviesIndex>
        /movies/:movieId - renders <MoviePage>
        /faves - renders <Faves>
        /login - renders <Login>, redirects to / after login
      */}
      
      <Router>
        <Routes>
          <Route path="/" element={<Index user={user} setUser={setUser} />}>
            <Route index element={<HomePage user={user}/>} />
            <Route path="movies" element={<Movies />}>
              <Route index element={<MoviesIndex movies={movies} toggleSave={toggleSave} user={user}/>} />
              <Route path=":movieId" element={<MoviePage toggleSave={toggleSave} user={user} watchList={watchList}/>} />
            </Route>
            <Route path="faves" element={<Faves faves={watchList} toggleSave={toggleSave} user={user}/>} />
            <Route path="login" element={<LoginPage setUser={setUser} />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

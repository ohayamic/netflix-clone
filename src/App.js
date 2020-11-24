import './App.css';
import Rows from './Components/Rows'
import request from './Components/request'
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import'./App.css'
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#1f211f" }}>
      
      <Banner />
      <section>
        <article>
          <Rows isLargeRow={true} title='Netflix Originals' fetchURL={request.fetchNetflixOriginals} /> 
        </article>
        <article  >
           <Rows  title='Trending Now' fetchURL={request.fetchTrending} />
        </article>
        <article >
           <Rows  title='Romance' fetchURL={request.fetchRomanceMovies}/>
        </article>
        <article  >
           <Rows  title='Comedy' fetchURL={request.fetchComedyMovies}/>
        </article>
        <article  >
           <Rows  title='Action Movies' fetchURL={request.fetchActionMovies}/>
        </article>
        <article  >
           <Rows  title='Horror Movies' fetchURL={request.fetchHorrorMovies}/>
        </article>
        <article  >
          <Rows  title='Documentaries' fetchURL={request.fetchDocumentries} />
        </article>
        <article  >
          <Rows isLargeRow={true}  title='Top rated' fetchURL={request.fetchTopRated} />
        </article>
        <Footer />
     </section>
    </div>
  );
}

export default App

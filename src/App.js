import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Bundles from './components/Bundles';
import Hero from './components/Hero';
import Loading from './Loading';
import LoadingPortfolio from './components/LoadingPortfolio';
import Portfolios from './components/Portfolios';
import ContactForm from './components/ContactForm';
import Biography from './components/Biography';
import Studio from './components/Studio';
import StaffSlider from './components/StaffSlider';
import BottomFooter from './components/BottomFooter';
import NewFooter from './components/NewFooter';
import FooterLogo from './components/FooterLogo';

const url = 'packagesData.json';
const urlPortfolio = 'portfolioData.json';

  function App(){


    const [isLoading, setIsLoading]= useState(true)
    const [bundles, setBundles]= useState([])

    //Portfolio
    const [isLoadingPortfolio, setIsLoadingPortfolio]= useState(true)
    const [portfolios, setPortfolios] = useState([])

    const removeBundle = (id) => {
      const newBundles = bundles.filter((bundle) => bundle.id !== id);
      setBundles(newBundles);
    };

    //Portfolio
    const removePortfolio = (id) => {
      const newPortfolios = portfolios.filter((portfolio) => portfolio.id !== id);
      setPortfolios(newPortfolios);
    };
    


    const fetchBundles = async () =>{
      setIsLoading(true);
      try{
        const response = await fetch(url);
        const bundles = await response.json();
        setBundles(bundles);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)

    };

    //Portfolio


    const fetchPortfolios = async () =>{
      setIsLoadingPortfolio(true);
      try{
        const response = await fetch(urlPortfolio);
        const portfolios = await response.json();
        setPortfolios(portfolios);
      } catch (error) {
        console.log(error);
      }
      setIsLoadingPortfolio(false)

    };

    useEffect(()=>{
      fetchBundles();
     }, []);

     //Portfolio
     useEffect(()=>{
      fetchPortfolios();
    }, []);

     if(isLoading){
      return <main>
        <Loading/>
      </main>
     }



     if(isLoadingPortfolio){
      return <main>
        <LoadingPortfolio/>
      </main>
     }

 if(portfolios.length === 0){
  return <main>
    <div className='title-portfolio'>
      <h2>no portfolios left</h2>
      <button type='button' style={{marginTop:'2rem'}}
      className='buttonReadMore' onClick={()=> fetchPortfolios()}
      >
        Refresh
      </button>
    </div>
  </main>

     }
     


    return (
    <div>
      <Navbar/>
      <Hero/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Biography/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Bundles bundles={bundles} removeBundle={removeBundle} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Studio/>
      <br></br>
      <br></br>
      <StaffSlider/>
      <br></br>
      <Portfolios portfolios={portfolios} removePortfolio={removePortfolio} />
      <br></br>
      <br></br>
      <ContactForm/>
      <br></br>
      <br/>
      <br></br>
      <FooterLogo/>
      <NewFooter/>
      <BottomFooter/>
  </div>
)


}


export default App;



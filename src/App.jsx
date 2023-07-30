import Experties from "./componets/Experties/Experties";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import People from "./componets/People/People";
import Portfolio from "./componets/Portfolio/Portfolio";

import Hero from "./componets/hero/Hero";
import css from './styles/app.module.scss'

const App = () => {
  //don't forget to add font link in index.htmlss
  return <div className={` bg-primary ${css.container}`}>
<Header/>
<Hero/>
<Experties/>
<Portfolio/>
<People/>
<Footer/>



  </div>
};

export default App;

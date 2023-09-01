import { useEffect, useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import db from './firebase';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

function App() {
  const [portfolioData,setPortfolioData] = useState();


  useEffect(() => {
    const q = query(collection(db, "portfolio"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map(d=>{
        console.log(d.data());
        setPortfolioData({
          name:d.get('name')
        })
})
    });
    console.log(portfolioData);

  }, [])

  return (
    <div>
      <Navbar />
    <Home name={portfolioData != null ? portfolioData.name : null}/>
    <About /> 
    <Portfolio />
    <SocialLinks />

    </div>
  );
}

export default App;

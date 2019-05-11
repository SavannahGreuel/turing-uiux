import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <nav></nav>
      <div className = "pageContainer">
        <div className = "attnCatcherContainer">
          <h1 className = " attnCatcherHeader"> </h1>
          <ul className = "categories">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> {/* end of attnCatcherContainer*/}
        <div className = "topBodyContainer">
          <div className = "filerBar">

          </div> {/*end of filterBar */}
          <div className = "productContainer1">
            <div className = "product">

            </div>{/*end of product */}

          </div>{/*end of productContainer1 */}
        </div>{/*end of topBodyContainer */}
        <div className = "bottomBodyContainer">
          <div className = "productContainer2">
            <div className = "product">

            </div>{/*end of product */}
          </div>{/*end of productcontainer2 */}
          <div className = "bottomAttnCatcher">
            <h1 className = " bottomattnCatcherHeader"> </h1>
            <p className = "tagline"></p>
            <button className = "whiteButton"></button>
          </div> {/*end bottomAttnCatcher*/}
          <div className = "subscribe">
    
          </div>{/*end of subscribe */}
        </div>{/*end of bottomBodyContainer */}
      
      </div> {/* end of pageContainer*/}
      <footer></footer>
    </div> //end of app
  );
}

export default App;

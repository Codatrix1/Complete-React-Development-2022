import React from "react";

//---------------------
// Main React Component
//---------------------
const App = function () {
  return (
    <div className="categories-container">
      <div className="category-container">
        {/*<img src="" alt="" />*/}
        <div className="category-body-container">
          <h2>Hats</h2>
          <span>Shop Now</span>
        </div>
      </div>
      <div className="category-container">
        {/*<img src="" alt="" />*/}
        <div className="category-body-container">
          <h2>Jackets</h2>
          <span>Shop Now</span>
        </div>
      </div>
      <div className="category-container">
        {/*<img src="" alt="" />*/}
        <div className="category-body-container">
          <h2>Sneakers</h2>
          <span>Shop Now</span>
        </div>
      </div>
      <div className="category-container">
        {/*<img src="" alt="" />*/}
        <div className="category-body-container">
          <h2>Womens</h2>
          <span>Shop Now</span>
        </div>
      </div>
      <div className="category-container">
        {/*<img src="" alt="" />*/}
        <div className="category-body-container">
          <h2>Mens</h2>
          <span>Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default App;
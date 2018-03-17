import React from "react";
import ProductList from "../../containers/ProductList";
import Header from "../../containers/Header";
import Category from "./Category";

const Homepage = () => {
    return (
      <div className="container" style={{ width: 1350 }}>
        <div className="row" style={{ paddingTop: 20 }}>
            <div>
              <Header />
            </div><br/>
            <div className="col-md-4"><Category /></div>
            <div className="col-md-8" style={{ float: "right" }}>
              <ProductList />
            </div>
        </div>
        <footer>......</footer>
      </div>
    );
}

export default Homepage;

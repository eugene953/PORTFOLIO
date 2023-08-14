import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire Portfolio. </h1>
        <h2 className="">My future works. </h2>
        <p className="pl-desc">
        Welcome to my portfolio, where I share my passion and 
        aspirations for the future of my work.
         I envision a career that is driven by innovation, 
         creativity, and a deep sense of purpose.
          My goal is to make a meaningful impact , 
          contributing to positive change
           and inspiring others along the way.


        
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

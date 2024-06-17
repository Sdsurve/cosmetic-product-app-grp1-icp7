import React, { useEffect, useState } from 'react';
import './Product.css';
import banner from './banner.jpeg';
import banner2 from './banner2.jpg';
import Footer from './../../component/Footer/Footer';
import Navbar from './../../component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBox from "./../../component/ButtonBox/ButtonBox";
import ProductCards from '../../component/ProductCards/ProductCards';
import Productdata from './../../component/ProductCards/Productdata/Data';

function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Productdata);

  const filterResults = (catItm) => {
    if (catItm === "All") {
      setFilteredData(Productdata);
    } else {
      const result = Productdata.filter((curData) => curData.Categories === catItm);
      setFilteredData(result);
    }
  }

  useEffect(() => {
    const result = Productdata.filter((val) => {
      if (searchTerm === "") {
        return true;
      } else if (val.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
    setFilteredData(result);
  }, [searchTerm]);

  return (
    <>
      <Navbar />

      <img className='banner-img' width={'100%'} src={banner} alt="Banner" />
      <h1 className='Slogun'>-----"Glow Naturally, Shine Confidently"-----</h1>
      <div className='search-container'>
        <span className='reults-heading'>All Results...</span>
        <input
          className='input-feild'
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr />

      <div className='main-div'>
        <div className='pcardsContainers'>
          {
            filteredData.map((item, i) => {
              const { id, ProductImg, Title, Price, Categories } = item;
              return (
                <ProductCards
                  key={i}
                  id={id}
                  ProductImg={ProductImg}
                  Title={Title}
                  Price={Price}
                  Categories={Categories}
                />
              )
            })
          }
        </div>

        <div className='categories-div'>
          <ul type='none'>
            <li><h1 className='Sub-title'>Categories..</h1></li>
            <li>
              <ul type='circle'>
                <li className={`list-2`} onClick={() => filterResults('All')}>All</li>
                <li className={`list-2`} onClick={() => filterResults('Makeup')}>Makeup</li>
                <li className={`list-2`} onClick={() => filterResults('Skin')}>Skincare</li>
                <li className={`list-2`} onClick={() => filterResults('Hair')}>Hair</li>
                <li className={`list-2`} onClick={() => filterResults('Body')}>Body & Bath</li>
              </ul>
            </li>
          </ul>
          <hr />
          <h1 className='Sub-title'>Product Tags..</h1>
          <button className='tag-btn'>Cosmetics</button>
          <button className='tag-btn'>Facecare</button>
          <button className='tag-btn'>Skincare</button>
          <button className='tag-btn'>Perfume</button>
          <hr />
          <img className='banner2 img-fluid' src={banner2} alt="Banner 2" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

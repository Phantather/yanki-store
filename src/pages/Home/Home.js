import React from 'react';
import hc1 from "../../assets/homecard1.png"
import hc2 from "../../assets/homecard2.png"
import hc3 from "../../assets/homecard3.png"
import hc4 from "../../assets/homecard4.png"

const Home = () => {
    return (
        <div className="home">
         <div className="container">
             <div className="home__top">
                 <h2 className="home__top-title">
                     Новая коллекция
                 </h2>
                 <div className="home__line"></div>
                 <p className="home__top-desc">
                     Смотреть Новинки
                 </p>
             </div>
             <div className="home__bottom">
                 <h2 className="home__bottom-title">Категории</h2>
                 <div className="home__cards">
                     <div className="home__card">
                         <img className="home__card-img" src={hc1} alt=""/>
                         <div className="home__card-bottom">Куртки</div>
                     </div>
                     <div className="home__card">
                         <img src={hc2} alt=""/>
                         <div className="home__card-bottom">Пальто</div>
                     </div>
                     <div className="home__card">
                         <img src={hc3} alt=""/>
                         <div className="home__card-bottom">Шубы</div>
                     </div>
                     <div className="home__card">
                         <img src={hc4} alt=""/>
                         <div className="home__card-bottom">Парки</div>
                     </div>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Home;
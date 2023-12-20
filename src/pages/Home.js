// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import './Home.css';

// Замените эти изображения на реальные изображения ваших продуктов
const sliderImages = [
  '/images/image1.png',
  'images/image2.png',
  '/images/image3.jpg'
];

function Home() {
  return (
    <div className="home">
      <Header />
      <ImageSlider images={sliderImages} />

      <section id="parquet" className="category">
        <h2>Паркет</h2>
        <p>Описание паркета...</p>
        {/* Здесь можно добавить дополнительные изображения или содержимое */}
      </section>

      <section id="countertops" className="category">
        <h2>Столешницы</h2>
        <p>Описание столешниц...</p>
        {/* Здесь можно добавить дополнительные изображения или содержимое */}
      </section>

      <section id="tables" className="category">
        <h2>Столы</h2>
        <p>Описание столов...</p>
        {/* Здесь можно добавить дополнительные изображения или содержимое */}
      </section>

      <Footer />
    </div>
  );
}

export default Home;

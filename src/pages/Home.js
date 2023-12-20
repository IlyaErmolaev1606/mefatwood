import React from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import './Home.css';

const images = [
  // Здесь будут пути к изображениям ваших продуктов
  'images/image1.png',
  'images/image2.png',
  'images/image3.jpg'
];

function Home() {
  return (
    <div className="home">
      <Header />
      <ImageSlider images={images} />
      <section id="parquet" className="category">
        {/* Тут будет содержимое для категории Паркет */}
      </section>
      <section id="countertops" className="category">
        {/* Тут будет содержимое для категории Столешницы */}
      </section>
      <section id="tables" className="category">
        {/* Тут будет содержимое для категории Столы */}
      </section>
      <Footer />
    </div>
  );
}

// function CategorySection({ id, title, description, image }) {
//   return (
//     <section id={id} className="category">
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <img src={image} alt={title} />
//     </section>
//   );
// }
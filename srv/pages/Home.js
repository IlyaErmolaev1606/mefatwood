import React from 'react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <section id="parquet" className="category">
        {/* Тут будет содержимое для категории Паркет */}
      </section>
      <section id="countertops" className="category">
        {/* Тут будет содержимое для категории Столешницы */}
      </section>
      <section id="tables" className="category">
        {/* Тут будет содержимое для категории Столы */}
      </section>
    </div>
  );
}

// src/pages/Home.css
.category {
  margin-top: 100px; /* Отступ, чтобы контент не перекрывался шапкой */
  padding: 2rem;
}

.home {
  padding-top: 60px; /* Отступ для всей страницы, чтобы контент не перекрывался шапкой */
}
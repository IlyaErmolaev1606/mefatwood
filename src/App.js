import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'; // Убедитесь, что этот файл существует и содержит глобальные стили

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* Добавьте дополнительные маршруты здесь */}
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

import Button from 'core/components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Main = () => {
    return (
        <div className="main-page">
            <h1 className="main-title">Desafio do Capítulo 3,<br />Bootcamp DevSuperior</h1>
            <div className="main-content">
                <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /></p>
                <p>Favor observar as instruções passadas no capítulo sobre a elaboração <br />deste projeto.</p>
                <p>Este design foi adaptado a partir de Ant Design System for Figma,<br />de Mateusz Wierzbicki: <strong className="main-email-address">antforfigma@gmail.com</strong></p>      
            </div>
            <Link to="/search">
                <Button title="começar"/>
            </Link>  
        </div>
    );
};

export default Main;
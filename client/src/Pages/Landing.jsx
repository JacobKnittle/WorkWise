import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';

import { Link } from 'react-router-dom';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            dignissimos dolorem laudantium, esse illo pariatur. Optio ipsam
            accusantium aperiam expedita fuga libero laudantium harum in
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;

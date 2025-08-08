import { useNavigate, Link } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = (pageName) => {
    navigate('/comingSoon', { state: { pageName } });
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754408583/logo_r7sogl.png"
            alt="img/logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <h2 className="poppins-regular">Home</h2>
              </Link>
            </li>
            <li className="nav-item" onClick={() => handleNavigate('About Us')}>
              <span className="nav-link" style={{ cursor: 'pointer' }}>
                <h2 className="poppins-regular">About Us</h2>
              </span>
            </li>
            <li className="nav-item" onClick={() => handleNavigate('Services')}>
              <span className="nav-link" style={{ cursor: 'pointer' }}>
                <h2 className="poppins-regular">Services</h2>
              </span>
            </li>
            <li className="nav-item" onClick={() => handleNavigate('Portfolio')}>
              <span className="nav-link" style={{ cursor: 'pointer' }}>
                <h2 className="poppins-regular">Portfolio</h2>
              </span>
            </li>
            <li className="nav-item" onClick={() => handleNavigate('Blog')}>
              <span className="nav-link" style={{ cursor: 'pointer' }}>
                <h2 className="poppins-regular">Blog</h2>
              </span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                <h2 className="poppins-regular">Contact Us</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
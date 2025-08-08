function Nav() {
  return (
    <>
      <div className="nav-top">
        <div className="container">
          <div className="row nav-top-main align-items-center">
            <div className="col-lg-6">
              <div className="contact-details d-flex flex-wrap">
                <div className="phone tab me-4 d-flex align-items-center">
                  <i className="fa-solid fa-phone me-2"></i>
                  <a href="tel:+918962297527" className="poppins-regular text-decoration-none text-dark">
                    +91-8962297527
                  </a>
                </div>
                <div className="email tab d-flex align-items-center">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <a href="mailto:akushwaha2021@nstechlabs.in" className="poppins-regular text-decoration-none text-dark">
                    akushwaha2021@nstechlabs.in
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end mt-3 mt-lg-0">
              <div className="social-links">
                <ul className="list-inline m-0">
                  <li className="list-inline-item me-3">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter text-dark"></i>
                    </a>
                  </li>
                  <li className="list-inline-item me-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook text-dark"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin text-dark"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
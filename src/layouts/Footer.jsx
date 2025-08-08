export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 first">
                            <div className="logo_White">
                                <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754472378/logo_White_yl747d.png" alt="img/logo" />
                            </div>
                            <hr style={{ margin: "8px 0 18px 0", borderTop: "1px solid white" }} />
                            <ul className="contact_details">
                                <li>
                                    <i style={{ fontSize: '14px', color: "#ffff" }} class="fa-solid fa-location-dot"></i>
                                    <p style={{ fontSize: '14px', color: "#ffff" }}>Morar, Gwalior, Madhya Pradesh, 474006</p>
                                </li>
                                <li>
                                    <i style={{ fontSize: '14px', color: "#ffff" }} class="fa-solid fa-phone"></i>
                                    <p style={{ fontSize: '14px', color: "#ffff" }}>+91-8962297527</p>
                                </li>
                                <li>
                                    <i style={{ fontSize: '14px', color: "#ffff" }} class="fa-solid fa-envelope"></i>
                                    <p style={{ fontSize: '14px', color: "#ffff" }}>akushwaha2021@nstechlabs.in</p>
                                </li>
                            </ul>
                            <div style={{ marginTop: "10px" }} className="social-links">
                                <ul >
                                    <li >
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <i style={{ color: "#ffff" }} className="fa-brands fa-twitter "></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <i style={{ color: "#ffff" }} className="fa-brands fa-facebook "></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <i style={{ color: "#ffff" }} className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h3 style={{ color: "#ffff", marginBottom:"16px"}}>Quick Links</h3>
                            <ul className="links">
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">About Us</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Services</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Portfolio</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 style={{ color: "#ffff", marginBottom:"16px"}}>Our Services</h3>
                            <ul className="links">
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Web Development</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Web Design / Psd To Html</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Ui/Ux Design</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Front-End</a>
                                </li>
                                <li>
                                    <img style={{ width: "12px" }} src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754474099/Group_bhhcvd.svg" alt="" />
                                    <a href="/comingSoon">Back-End</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 style={{ color: "#ffff", marginBottom:"16px"}}>Recent Blog Post</h3>
                            <ul className="links">
                                <li>
                                    <a href="/comingSoon">Interview Questions and Answers</a>
                                </li>
                                <li>
                                    <a href="/comingSoon">What is Node.js ?</a>
                                </li>
                                <li>
                                    <a href="/comingSoon">How to use MongoDb Atlas</a>
                                </li>
                                <li>
                                    <a href="/comingSoon">How to use Cloudfare</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#000032"}} className="copy_right">
                <p style={{ fontSize: '14px', color: "#ffff", opacity:"0.5" }}>Copyright © 2014-2025 NS TechLabs. All Rights Reserved.</p>
            </div>
        </>
    )
}
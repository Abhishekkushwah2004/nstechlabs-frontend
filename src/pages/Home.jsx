import './../App.css';
import BannerSection from '../components/BannerSection';
import ServicesBox from '../components/ServicesBox';
import FlowWorkBox from '../components/home/FlowWorkBox';
import ContactForm from '../components/ContactForm';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (<>
        
        <BannerSection img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754409248/Banner-Section_wcdc7j.png"} title='The #1 Company for Exceptional Web and Mobile App Development' subtitle={"Providing end-to-end development solutions with expert web & app development, seamless UI/UX and creative design for businesses of all sizes."} />
        <div className="service-section">
            <div className="container">
                <div className="service-section-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 service-section_heading">
                                    <div className="title">
                                        <h4 style={{ color: '#6DA536' }} className='poppins-regular'>Services we offer</h4>
                                    </div>
                                    <div className="subtitle">
                                        <h6 style={{ color: '#0F0F57', marginTop: '8px' }} className='h6_30'>All-Round Digital Product Development</h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 box_container">
                                    <ServicesBox img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754453753/Services_icon_dsswm8.png"} title="Web Development" subtitle="Providing the solutions for tech business" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 box_container">
                                    <ServicesBox img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754453754/webdesign_icon_rj8itj.png"} title="Web Design Psd to Html" subtitle="Providing the solutions for tech business" />
                                </div>
                                <div className="col-lg-6 box_container">
                                    <ServicesBox img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754453753/uiux_icon_oipwjz.png"} title="UI/UX Designing" subtitle="Providing the solutions for tech business" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 box_container">
                                    <ServicesBox img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754453753/frontend_icon_a2gflm.png"} title="Frontend" subtitle="Providing the solutions for tech business" />
                                </div>
                                <div className="col-lg-6 box_container">
                                    <ServicesBox img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754453753/backend_icon_nbej0f.png"} title="Backend" subtitle="Providing the solutions for tech business" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 box_container">
                                    <ServicesBox img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754453753/database_icon_zbvwka.png"} title="DataBase" subtitle="Providing the solutions for tech business" />
                                </div>
                                <div className="col-lg-6 box_container">
                                    <div className="box">
                                        <div className="subtitle">
                                            <p style={{ color: '#303030' }}>Get Your Technology Solutions</p>
                                        </div>
                                        <div className="title">
                                            <h3 style={{ color: '#0F0F57' }}>Don't Waste a Second! Call Us to Solve Your Any IT Solutions</h3>
                                        </div>
                                        <div className="button">
                                            <button onClick={() => navigate('/contactUs')} className='poppins-regular'>Find Your Solution</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="why_choose_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="heading">
                            <div className="title">
                                <h4 style={{ color: '#0F0F57' }} className='poppins-regular'>why choose our company</h4>
                            </div>
                            <div className="subtitle">
                                <h6 style={{ color: '#ffff', marginTop: '8px' }} className='h6_30'>Why NS TechLabs is the Right Choice</h6>
                            </div>
                        </div>
                        <div style={{ width: "80%" }} className="text paragraph">
                            <p style={{ color: '#ffff', marginTop: '20px' }}>At NS Tech Labs, we blend innovation, precision and expertise to deliver powerful digital solutions tailored to your business goals. Whether you're a startup or an enterprise, our team ensures top-tier performance with scalable development, intuitive UI/UX and creative design. With a client-first mindset, transparent communication and on-time delivery, we’re not just a service provider — we’re your long-term tech partner.</p>
                        </div>
                        <hr style={{ borderTop: "1px Solid #0F0F57" }} />
                        <div className="box">
                            <div className="img">
                                <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754456646/great_icon_agcwpz.png" alt="" />
                            </div>
                            <div className="text">
                                <div className="title">
                                    <h3 style={{ color: '#0F0F57' }}>Great Services, Honest Pricing</h3>
                                </div>
                                <div className="subtitle">
                                    <p style={{ color: '#ffff'}}>We’ve designed a culture that allows our stewards to assimilate</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderTop: "1px Solid #0F0F57" }} />
                        <div className="box">
                            <div className="img">
                                <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754456635/fast_icon_jyni3h.png" alt="" />
                            </div>
                            <div className="text">
                                <div className="title">
                                    <h3 style={{ color: '#0F0F57' }}>Fast. Reliable. Always On Schedule.</h3>
                                </div>
                                <div className="subtitle">
                                    <p style={{ color: '#ffff', maxWidth: "55%" }}>We’ve designed a culture that allows our stewards to assimilate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 right_side_img">
                        <div className="img">
                            <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754456749/why_choose_our_img_udfgqy.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="heading">
                            <div className="title">
                                <h4 style={{ color: '#6DA536' }} className='poppins-regular'>About Our Company</h4>
                            </div>
                            <div style={{ width: "100%" }} className="subtitle">
                                <h6 style={{ color: '#0F0F57', marginTop: '8px' }} className='h6_30'>Welcome to NS TechLabs — your trusted partner for innovative web and mobile app development.</h6>
                            </div>
                        </div>
                        <div style={{ width: "95%" }} className="text">
                            <p style={{ color: "#303030", margin: "10px 0" }}>At NS TechLabs, we don’t just build products — we build digital experiences that empower businesses and entrepreneurs to grow, scale and succeed in the modern world. Whether you're a startup founder with a bold idea or an established enterprise seeking transformation, our team is here to deliver smart, scalable and reliable solutions tailored to your needs.</p>
                            <p>From sleek websites to powerful mobile apps, our services are rooted in deep technical expertise, a strong design-first approach and a passion for solving real-world problems through technology. But we go beyond just development — NS TechLabs is also a thriving community for entrepreneurs, creators and innovators looking to make an impact.</p>
                            <div className="points">
                                <h3 style={{ color: "#0f0f57", margin: '10px 0' }}>We pride ourselves on:</h3>
                                <ul >
                                    <li>
                                        <i style={{ color: "#6DA536" }} class="fa-solid fa-check"></i>
                                        <p style={{ color: "#303030" }}>End-to-end development solutions</p>
                                    </li>
                                    <li>
                                        <i style={{ color: "#6DA536" }} class="fa-solid fa-check"></i>
                                        <p style={{ color: "#303030" }}>Transparent communication and on-time delivery</p>
                                    </li>
                                    <li>
                                        <i style={{ color: "#6DA536" }} class="fa-solid fa-check"></i>
                                        <p style={{ color: "#303030" }}>Affordable, value-driven pricing</p>
                                    </li>
                                    <li>
                                        <i style={{ color: "#6DA536" }} class="fa-solid fa-check"></i>
                                        <p style={{ color: "#303030" }}>Long-term partnerships focused on your success</p>
                                    </li>
                                </ul>
                                <p style={{ color: "#303030", marginTop: "10px" }}>Join us at NS TechLabs, where technology meets vision — and ideas turn into powerful digital realities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 right_side_img">
                        <div style={{ zIndex: "2", position: "relative" }} className="img">
                            <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754461776/about_us_img_ecf95p.png" alt="" />
                        </div>
                    </div>
                </div>
                <span></span>
            </div>
        </div>
        <div className="work_flow">
            <div className="container">
                <div className="work_flow_container">
                    <FlowWorkBox colorName='#0F0F57' title="Meeting" img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754464743/meeting-consider-deliberate-about-meet_svgrepo.com_njpsfk.png" />
                    <FlowWorkBox colorName='#0F0F57' title="Planning" img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754464743/planning_svgrepo.com_qk5q0x.png" />
                    <FlowWorkBox colorName='#0F0F57' title="Designing" img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754464743/design-education-painting_svgrepo.com_qwouav.png" />
                    <FlowWorkBox colorName='#0F0F57' title="Developing" img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754464743/web-development_svgrepo.com_zwbhfb.png" />
                    <FlowWorkBox colorName='#0F0F57' title="Testing" img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754464743/test-result-science_svgrepo.com_zldhub.png" />
                    <FlowWorkBox colorName='#0F0F57' title="Delivary" img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754464743/host-outline-alerted_svgrepo.com_scuocm.png" />
                </div>
            </div>
        </div>
        <div className="contact_Us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="heading">
                            <div className="title">
                                <h4 style={{ color: '#6DA536' }} className='poppins-regular'>Contact Us</h4>
                            </div>
                            <div style={{ width: "100%" }} className="subtitle">
                                <h6 style={{ color: '#0F0F57', marginTop: '8px' }} className='h6_30'>Let’s Build Your Next Digital Solution</h6>
                            </div>
                        </div>
                        <div style={{ width: "95%" }} className="text">
                            <p style={{ color: "#303030", margin: "10px 0" }}>Whether you're starting a new project, scaling your current platform, or just exploring ideas — we're here to help. At NS TechLabs, our team of developers, designers and strategists is ready to understand your goals and craft the right tech solution for your business.</p>
                            <p>Fill out the form or reach out directly — let's take the next step together. </p>

                        </div>
                        <div className="contact_details">
                            <hr style={{ margin: '28px 0' }} />
                            <h3 style={{ color: '#0F0F57' }}>Get in Touch</h3>
                            <p style={{ color: '#303030', marginTop: '14px' }}><b>Location: </b>[Morar, Gwalior, Madhya Pradesh, 474006]</p>
                            <p style={{ color: '#303030', margin: '10px 0' }}><b>Email: </b>akushwaha2021@nstechlabs.in</p>
                            <p style={{ color: '#303030' }}><b>Phone: </b>+91-8962297527</p>
                            <hr style={{ margin: '28px 0 14px 0' }} />
                            <p style={{ color: '#303030', fontSize: "14px" }}>Just complete the form on the right and our team will reach out within 24 hours.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 right_side_img">
                        <ContactForm />
                    </div>
                </div>
                <span></span>
            </div>
        </div>

    </>)
}

export default Home
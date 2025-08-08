import BannerSection from "../components/BannerSection"
import ProposalForm from "../components/home/ProposalForm"
import FlowWorkBox from "../components/home/FlowWorkBox"
import '../App.css'

export default function ContactUs() {
    return (
        <>
            <BannerSection img={"https://res.cloudinary.com/djiuh3gic/image/upload/v1754554966/Banner-Section-contact_ipd5da.png"} title='We’re Just One Click Away From Solving Your Problem' subtitle={"The Digital World Moves Fast. Don’t Let Others Outshine You — We’ve Got Your Back. Our tech solutions are built to match your pace and ambition"} />
            <div className="contactUs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading">
                                <div className="title">
                                    <h4 style={{ color: '#6DA536' }} className='poppins-regular'>Contact Us</h4>
                                </div>
                                <div style={{ width: "100%" }} className="subtitle">
                                    <h6 style={{ color: '#0F0F57', marginTop: '8px' }} className='h6_30'>Designing Success Starts With a Proposal</h6>
                                </div>
                            </div>
                            <div style={{ width: "95%" }} className="text">
                                <p style={{ color: "#303030", margin: "10px 0" }}>Whether you're designing something from the ground up, improving performance, or experimenting with new technologies — NS TechLabs is here to help. Our development and strategy teams work hand-in-hand to deliver solutions that align with your vision.</p>
                                <p>Fill in the form or drop us a line — and let’s get started.<br />
                                    We’ll guide you through every phase — from idea to execution.</p>

                            </div>
                            <div className="contact_details">
                                <hr style={{ margin: '28px 0' }} />
                                <h3 style={{ color: '#0F0F57' }}>Get in Touch</h3>
                                <p style={{ color: '#303030', marginTop: '14px' }}><b>Location: </b>[Morar, Gwalior, Madhya Pradesh, 474006]</p>
                                <p style={{ color: '#303030', margin: '10px 0' }}><b>Email: </b>akushwaha2021@nstechlabs.in</p>
                                <p style={{ color: '#303030' }}><b>Phone: </b>+91-8962297527</p>


                            </div>
                            <div className="contact_details">
                                <hr style={{ margin: '28px 0' }} />
                                <h3 style={{ color: '#0F0F57' }}>We are here to help –</h3>
                                <p style={{ color: '#303030', fontSize: "14px", marginTop: '14px' }}>NS TechLabs is always ready to serve its clients with dedication. Each client and project contributes valuable expertise to our growing portfolio. We've delivered a variety of successful projects and gained meaningful experience. Take a quick look at some of our work — many more are on the way and there's still much more we aim to achieve.</p>
                                <div className="row work_flow_container">
                                    <div className="flowWorkBox">
                                        <div style={{ width: "60px" }} className="img">
                                            <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754589522/collaboration_swd2lh.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3 style={{fontSize:"16px", color: "#0F0F57" }}>Collaborate</h3>
                                        </div>
                                    </div>
                                    <div className="flowWorkBox">
                                        <div style={{ width: "60px" }} className="img">
                                            <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754589522/clipboard_lriuo4.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3 style={{fontSize:"16px", color: "#0F0F57" }}>Implement</h3>
                                        </div>
                                    </div>
                                    <div className="flowWorkBox">
                                        <div style={{ width: "60px" }} className="img">
                                            <img src="https://res.cloudinary.com/djiuh3gic/image/upload/v1754589521/form_f1w4qt.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3 style={{fontSize:"16px", color: "#0F0F57" }}>Succeed</h3>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ margin: '28px 0 14px 0' }} />
                                <p style={{ color: '#303030', fontSize: "14px" }}>Just share your details on the form to the right —<br /> we’ll be in touch within 24 hours to learn more about your project.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ProposalForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
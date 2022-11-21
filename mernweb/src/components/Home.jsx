import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';
import Services from './Services';



const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5 ">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">This is will be the intro</h1>
                        <p className="lead text-center mb-5 fs-4 text-white ">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxx
                        xxx</p>
                        <div className="button d-flex justify-content-center">
                            <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contact</NavLink>
                            <NavLink to="/services"className="btn btn-outline-light rounded-pill px-4 py-2">Services</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <About/>
        <Services/>
        <Contacts/>
        

    </div>
  );
}

export default Home;

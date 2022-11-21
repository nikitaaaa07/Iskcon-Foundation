import React from 'react';

const Contacts = () => {
  return (
    <div>
        <section className="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                    <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h1 className="display-6 text-center mb-4">Have Some <b>Questions</b></h1>
                        <hr className="w-25 mx-auto"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img scr="https://i.pinimg.com/736x/46/77/b2/4677b298dcb4409daf7abd6d42218799.jpg" alt="Contacts" className="w-75"></img>
                    </div>
                    <div className="col-md-6">
                        <form action>
                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="name" class="form-control" id="name" placeholder="Piyush Kaushish"/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="abc@gmail.com"/>
                        </div>

                        <div class="mb-3">
                            <label for="Message" class="form-label">Your Message</label>
                            <textarea class="form-control" id="Message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Send Message
                        <i className="fa fa-paper-plane ms-2"></i>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Contacts;
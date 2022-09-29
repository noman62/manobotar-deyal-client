import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Faq = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4lc4g8', 'template_y1isv6t', form.current, 'user_Vd1304XFyKIBo5M42LnmA')
      .then((result) => {
          console.log(result.text);
          window.location.reload(false);
      }, (error) => {
          console.log(error.text);
          window.location.reload(false);
      });
  };
    return (
        <div class="container-fluid faq text-light d-flex justify-content-center align-items-center pb-4 ">
            <div class="row  ">
                <div class="col-sm-12  p-4">
                    <h1 class="text-uppercase text-center">FAQ Section</h1>
                </div>
                <div class="col-sm-12">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <input type="email" class="form-control bg-transparent text-light" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div class="col-sm-6">
                                <input type="number" class="form-control bg-transparent text-light" placeholder="Enter Number" name="pswd" />

                            </div>
                            <div class="col-sm-12">
                                <textarea class="form-control text-light my-4 bg-transparent p-4" name="message" id="" cols="5" rows="5" placeholder="Type Your Question"></textarea>

                            </div>
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-outline-light w-100" value="Send">Submit</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Faq;
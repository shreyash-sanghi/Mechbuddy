import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { DotSpinner } from '@uiball/loaders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
const Contactus = () => {

  const [loading, setLoading] = useState(false);
  const [initial,final] = useState("");
  const [initialhtml,finalhtml]= useState("");
  const form = useRef();

  const notify = () => toast.success('Your Query Has Received !', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_lzvd7xc', 'template_4qze609', form.current, 'e7gYHo-02KI27ql12')
      .then((result) => {
        notify();     
        setLoading(false);
      }, (error) => {    
        setLoading(false);
      });
  };

  //controle email error
  const emailError = document.getElementById("email_error");
  function validateEmail(e){
     const emailvalue = e.target.value;
     console.log(emailvalue)
     final(emailvalue)
     if(emailvalue != " " && emailError!=null){
      if(!emailvalue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please enter a valid email";
        finalhtml(emailError.innerHTML)
        return false;
      }
      emailError.innerHTML = "";
      finalhtml(emailError.innerHTML)
      return true;
    }
    else{
      finalhtml("")
    }
  }
  return (
    <div className="bg-[#fff] h-screen flex flex-col 500:flex-row 500:justify-between 500:h-screen">
      <div className="flex flex-col 500:w-[70%]">
        <div className="text-[#000] underline text-center mt-4 text-5xl font-semibold">
          Contact Us
        </div>
        <div className="px-12 py-8 500:py-20 500:px-16 md:py-20 md:px-20 sxl:py-20 sxl:px-52">
          <form ref={form} onSubmit={sendEmail} class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" value={initial}  name="email" id="email" onChange={validateEmail} class="shadow-sm bg-[#F2F2F2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@mechbuddy.com" required style={{ boxShadow: '2px 2px 8px 0px #BDC3C7 inset, 4px 4px 8px 0px #FFF' }} />
            </div>
            <span dangerouslySetInnerHTML={{ __html:initialhtml }} className="text-red-500" id="email_error"></span>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-[#F2F2F2] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required style={{ boxShadow: '2px 2px 8px 0px #BDC3C7 inset, 4px 4px 8px 0px #FFF' }} />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-[#F2F2F2] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..." style={{ boxShadow: '2px 2px 8px 0px #BDC3C7 inset, 4px 4px 8px 0px #FFF' }}></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm bg-black font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
              {loading ? <DotSpinner size={40} speed={0.9} color="red" /> : "Send Message"}</button>
          </form>
        </div>
      </div>
      <div className=" 500:flex bg-contactbg 500:w-[30%] h-screen  flex-col justify-end ">
        
        
        
        
        <ul class="mt-4 500:mt-0 flex gap-6 mb-8 justify-center">
          <li>
            <Link
              to='https://www.facebook.com/profile.php?id=100089814726715&mibextid=LQQJ4d'
              rel="noreferrer"
              target="_blank"
              class="text-white transition hover:opacity-75 "
            >
              <span class="sr-only">Facebook</span>

              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to='https://www.instagram.com/mechbuddy_/'
              rel="noreferrer"
              target="_blank"
              class="text-white transition hover:opacity-75"
            >
              <span class="sr-only">Instagram</span>

              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li className="flex items-center">
            <Link
              to='https://x.com/mechbuddy_?s=11&t=fLuXJG_QilREvwKMUCrU6Q' rel="noreferrer"
              target="_blank"
              class="text-white transition hover:opacity-75"
            >
              <span class="sr-only">Twitter</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                className="h-4 w-4"
                viewBox="0 0 2400.000000 2453.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger
                  2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,2453.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M0 24525 c0 -2 2106 -3069 4680 -6816 2574 -3746 4680 -6812 4680 -6815 0 -2 -2106 -2452 -4680 -5444 -2574 -2992 -4680 -5442 -4680 -5445 0 -3 478 -5 1063 -4 l1062 0 4089 4755 c2249 2614 4092 4754 4095 4754 3 0 1475 -2139 3271 -4753 l3265 -4752 3578 -3 c1967 -1 3577 1 3577 4 0 3 -2185 3186 -4855 7072 -4808 6997 -4855 7066 -4837 7086 13 15 8729 10149 8900 10349 14 16 -37 17 -1050 17 l-1064 0 -3865 -4492 c-2125 -2470 -3869 -4498 -3874 -4505 -8 -11 -749 1061 -3105 4491 l-3095 4505 -3577 1 c-1968 0 -3578 -2 -3578 -5z m7490 -3540 c746 -1067 4091 -5853 7435 -10635 3343 -4782 6098 -8723 6122 -8757 l45 -63 -1620 0 -1620 0 -3075 4397 c-1690 2419 -5046 7220 -7457 10668 -2410 3449 -4393 6285 -4407 6303 l-24 32 1622 -2 1622 -3 1357 -1940z" />
                </g>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to='https://in.linkedin.com/company/mech-buddy-com'
              rel="noreferrer"
              target="_blank"
              class="text-white transition hover:opacity-75"
            >
              <span class="sr-only">LinkedIn</span>

              <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>

            </Link>
          </li>

          <li>
            <Link
              to='https://youtube.com/@mechbuddy_?si=Ub3jJ0d9SZnwSR7_'
              rel="noreferrer"
              target="_blank"
              class="text-white transition hover:opacity-75"
            >
              <span class="sr-only">Youtube</span>

              <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      < ToastContainer />
    </div>
  );
};

export default Contactus;

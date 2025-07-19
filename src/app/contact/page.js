import Image from "next/image";
import Contactme from '../../../public/contactme.png'
export default function Contact() {
  return (
      <div className="flex">
         <div className="mt-30">
           <Image 
           src={Contactme} 
           alt="contact image"
           /> 
         </div>
         <div className="mt-100">
            your name
            <input
              name="fullname"
              placeholder="enter your full name "
              className=""
              required
            />
              
            email
               <input
              name="fullname"
              placeholder="enter your full name "
              className=""
              required
            />
            message 
           <input
              name="fullname"
              placeholder="enter your full name "
              className=""
              required
            />
            <button>getintouch</button>

         </div>
      </div> 
   );
}

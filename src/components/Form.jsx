import { toastSuccessState, toastErrorState } from '../nimionStore';
import { useState } from 'react';
import emailJs from '@emailjs/browser';

const emailJsServiceId = "service_rxracdw";
const emailJsTemplateId = "template_mrhwz0r";
const emailJsPublicKey = "QyYX6TN8wWVXfqTWX";

const Form = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const template_params = {
        from_name: fullName,
        from_email: email,
        from_phone: phone,
        message: message
    }

    const restartForm = () => {
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    const sendEmail = (e) => {
        e.preventDefault();
        try{
            emailJs.send(emailJsServiceId, emailJsTemplateId, template_params , emailJsPublicKey )
            .then(response => {
                if(response.status === 200){
                    toastSuccessState.set(true);
                    setTimeout(()=>{toastSuccessState.set(false);}, 3000);
                }else {
                    toastErrorState.set(true);
                    setTimeout(()=>{toastErrorState.set(false);}, 3000);
                }
            })
        }catch(error){
            toastErrorState.set(true);
            setTimeout(()=>{toastErrorState.set(false);}, 3000);
            console.error('An Error occured: ', error)
        }
        restartForm();
    }

  return (
    <>
        <form className="flex flex-col items-center gap-4 mt-6" onSubmit={sendEmail}>
            <div className="flex items-center w-[70%] h-16 -ml-3">
                <img className="w-6 h-6 opacity-60" src="../images/user.png" alt="icon user" />
                <input name="name" value={fullName} onChange={(e)=> setFullName(e.target.value)} type="text" placeholder="Nombre completo" className=" w-[85%] ml-3 pl-1 h-10 border-0 border-b border-gray-400 text-sm font-medium outline-none hover:border-secondary-light focus:border-b-2 focus:border-secondary-light" />
            </div>
            <div className="flex items-center w-[70%] h-16 -ml-3">
                <img className="w-6 h-6" src="../images/email.png" alt="icon email" />
                <input name="email" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Ingrese Email" className=" w-[85%] ml-3 pl-1 h-10 border-0 border-b border-gray-400 text-sm font-medium outline-none hover:border-secondary-light focus:border-b-2 focus:border-secondary-light" />
            </div>
            <div className="flex items-center w-[70%] h-16 -ml-3">
                <img className="w-6 h-6" src="../images/phone.png" alt="icon user" />
                <input name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder="Ingrese celular" className=" w-[85%] ml-3 pl-1 h-10 border-0 border-b border-gray-400 text-sm font-medium outline-none hover:border-secondary-light focus:border-b-2 focus:border-secondary-light" />
            </div>
            <textarea name="message" value={message} onChange={(e)=> setMessage(e.target.value)} className="h-[7.5rem] w-[70%] resize-none border border-gray-400 rounded-lg p-3 mt-3 text-xs font-semibold outline-none focus:border-secondary-light focus:border-2 scrollbar" placeholder="Mensaje"></textarea>
            <button className="flex justify-center items-center gap-1 text-[.8rem] font-medium text-white bg-[#7683F9] bg-opacity-100 w-[8rem] h-[2.3rem] rounded-sm transition-all mb-1 hover:bg-secondary-light">Enviar iniciativa</button>
        </form>
    </>
  );
}

export default Form;
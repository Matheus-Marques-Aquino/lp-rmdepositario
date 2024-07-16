import { useState, useEffect } from "react";
import axios from "axios";

const patterns = {
    phone: /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

export default function Form({selectValue, onSelectChange}) {
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contact: 'whatsapp'
    });

    const phoneMask = (value) => {
        var mask = /(\d{2})(\d{5})(\d{4})/;
        var rawValue = value.replace(/\D/g, '');

        if (rawValue.length > 0 && rawValue.length < 3) {
            mask = /(\d{1,2})/;
            return rawValue.replace(mask, '($1');
        }

        if (rawValue.length > 2 && rawValue.length < 7) {
            mask = /(\d{2})(\d{1,5})/;
            return rawValue.replace(mask, '($1) $2');
        }

        if (rawValue.length > 6 && rawValue.length < 11) {
            mask = /(\d{2})(\d{4})(\d{1,4})/;
            return rawValue.replace(mask, '($1) $2-$3');
        }

        if (rawValue.length > 11) {
            rawValue = rawValue.slice(0, 11);
        }

        return rawValue.replace(mask, '($1) $2-$3');                
    }

    const validateForm = () => {
        var {
            name,
            email,
            phone,
            message,
            contact
        } = form;

        name = name.toString().trim();
        email = email.toString().trim();
        
        var errorList = [];

        if ((!patterns.email.test(email) && contact == 'email') || email.length < 5) errorList.push('email');        

        if (!patterns.phone.test(phone) && ['phone', 'whatsapp'].includes(contact)) errorList.push('phone');

        if (name.length < 3) errorList.push('name');        

        if (errorList.length > 0) {
            setErrors([ ...errorList ]);

            console.log('Failed');
            return false;
        }

        return true;
    } 

    const sendForm = () => {
        var valid = validateForm();
        if (!valid || loading) { return; }

        setLoading(true);

        var url = "/api/form";

        var headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }

        var data = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
            contact: form.contact
        };

        axios.post(url, data, { headers: headers })
            .then((response) => {
                console.log('Success:', response);
                setSuccess(true);
                setLoading(false);

                setTimeout(() => {
                    setSuccess(false);
                }, 8000);
            })
            .catch((error) => {
                console.error('Error:', error);
                setSuccess(false);
                setLoading(false);
            });
    }

    const inputHandler = (e) => {
        if (!e || !e.target ) { return; }

        var { name, value } = e.target;

        if (name.includes('preference')) {
            name = name.replace('preference-', '');
            
            if (value == 'on') {
                setForm({ 
                    ...form, 
                    contact: name 
                });
            }

            return;
        }
        
        if (errors.includes(name)) {
            let errorList = errors.filter((e)=>{ return e != name; }); 
            setErrors([ ...errorList ]);
        }

        if (name == 'phone') value = phoneMask(value);
        
        
        setForm({ 
            ...form, 
            [name]: value 
        });        
    }

    useEffect(() => {
        if (selectValue != form.select) {
            setForm({ 
                ...form, 
                select: selectValue 
            });
        }
    }, [selectValue]);

    //console.log('form:', form);

    return (
        <div className="bg-white w-full p-[20px] max-w-[425px] min-w-[350px] shadow-lg rounded-lg xs:p-[30px]">
            <div className={`text-[#313131]`} >
                <div className="w-fit font-semibold text-[20px] leading-[30px] text-center mx-auto xs:text-[23px]">
                    FALE CONOSCO
                </div>
                <div className="w-fit font-medium text-[16px] text-left xs:text-[17px] leading-[22px] mt-3">
                    Preencha o formulário abaixo e entraremos em contato!
                </div>
                <div className="w-fit mx-auto font-normal text-[16px] text-center mt-[8px] hidden">
                    Preencha o formuário abaixo:
                </div>
            </div>
            <div className="w-full gap-y-[10px] mt-[30px]">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={(e) => { inputHandler(e); }}
                        className={`bg-white text-[16px] border rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3
                            ${errors.includes('name') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : 'border-gray-300 text-gray-900'}`}
                        placeholder="Nome"
                    />
                </div>
                <div className="mt-[20px]">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => { inputHandler(e); }}
                        className={`bg-white text-[16px] border rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3
                            ${errors.includes('email') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : 'border-gray-300 text-gray-900'}`}
                        placeholder="E-mail"
                    />
                </div>
                <div className="mt-[20px]">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={(e) => { inputHandler(e); }}
                        className={`bg-white text-[16px] border rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 
                            ${errors.includes('phone') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : 'border-gray-300 text-gray-900'}`}
                        placeholder="Telefone"
                    />
                </div>
                <div className="mt-[20px]">
                    <div className={`border border-gray-300 text-gray-900 rounded-md w-full py-1 px-3
                        ${errors.includes('message') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : ''}`} >
                        <textarea 
                            name="message" 
                            rows="3"
                            placeholder="Mensagem"
                            className={`bg-white text-[16px] focus:ring-0 outline-0 focus:outline-0 focus:border-0 block w-full resize-none bg-transparent rounded-md
                                ${errors.includes('message') ? 'text-[#e53e3e] placeholder-red-600' : ''}`}                            
                            value={form.message} 
                            onChange={(e) => { inputHandler(e); }}
                        >
                        </textarea>
                    </div> {/*bg-white text-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 border border-gray-300 text-gray-900 rounded-md w-full*/}

                </div>
                <div className="mt-[20px]">
                    <div className="block mb-[3px] text-[14px] font-medium text-[#313131]">
                        Forma de contato de preferência:
                    </div>
                    <div className="flex mt-[5px]">
                        <input
                            type="radio"
                            id="preference-whatsapp"
                            name="preference-whatsapp"
                            className="my-auto"
                            checked={form.contact == 'whatsapp'} 
                            onChange={(e) => { inputHandler(e); }}                           
                        />
                        <label
                            htmlFor="preference-whatsapp"
                            className="ml-[5px] text-[14px] font-medium text-[#313131]"
                        >
                            WhatsApp
                        </label>
                        <input
                            type="radio"
                            id="preference-phone"
                            name="preference-phone"
                            className="my-auto ml-[25px]"
                            checked={form.contact == 'phone'}
                            onChange={(e) => { inputHandler(e); }}
                        />
                        <label
                            htmlFor="preference-phone"
                            className="ml-[5px] text-[14px] font-medium text-[#313131]"
                        >
                            Telefone
                        </label>
                        <input
                            type="radio"
                            id="preference-email"
                            name="preference-email"
                            className="my-auto ml-[25px]"
                            checked={form.contact == 'email'}
                            onChange={(e) => { inputHandler(e); }}
                        />
                        <label
                            htmlFor="preference-email"
                            className="ml-[5px] text-[14px] font-medium text-[#313131]"
                        >
                            E-mail
                        </label>
                    </div>
                </div>
                <div className={`w-fit h-fit mx-auto mt-[15px] text-[16px] font-normal text-green-600 leading-[20px] transition transition-all ease-in-out duration-500 overflow-hidden
                     ${success ? 'opacity-1 max-h-[40px]' : 'opacity-0 max-h-0'}
                `}>
                    Formulário enviado com sucesso!
                </div>
            </div>
            <div 
                className="w-full text-white text-center py-[8px] mt-[20px] cursor-pointer bg-[#3EC263] rounded-md hover:opacity-85 transition ease-in-out duration-300"
                onClick={() => { if (loading) return; sendForm(); }}
            >
                {!loading ? "Enviar" : "Enviando..."}
            </div>
        </div>
    );
}

const fs = require('fs');
const nodemailer = require('nodemailer');

const { google } = require('googleapis');
const { DateTime } = require('luxon');

const dotenv = require('dotenv');
dotenv.config();


const patterns = {
    phone: /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

export default async function handler(req, res) {
    const body = { ...req.body };
    var errors = [];

    var {
        name,
        email,
        phone,
        contact,
        message = ''
    } = body;

    if (!patterns.email.test(email) && contact == 'email') errors.push('email');    

    if (!patterns.phone.test(phone) && ['phone', 'whatsapp'].includes(contact)) errors.push('phone');    

    if (name.length < 3) errors.push('name');    

    if (errors.length > 0) {
        res.status(400).json(errors);
        return;
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: 'contato@illumitech.com.br',
        to: 'matheus.marques.aquino@gmail.com', //Trocar para o E-mail Deles
        subject: 'Contato do Site',
        text: `
            Nome: ${name}
            E-mail: ${email}
            Telefone: ${phone}
            Preferência de Contato: ${contact}
            Mensagem: ${message}
        `,
        html: `
            <p>Nome: ${name}</p>
            <p>E-mail: ${email}</p>
            <p>Telefone: ${phone}</p>
            <p>Preferência de Contato: ${contact}</p>
            <p>Mensagem: ${message}</p>
        `,
    };

    try {   
        const emailLoop = async (retry) => {
            try {
                var error = false;

                await new Promise( (resolve) => {
                    transporter.sendMail(mailOptions, (err) => {
                        if (err) error = true;
                        resolve();
                    });
                });

                if (error && retry > 0) {
                    console.error('Error sending e-mail', retry);

                    retry = retry - 1;
                    await delay(300);
                    await emailLoop(retry);

                    return;
                }           
            }catch(e){
                console.error('Error sending e-mail', retry, '-', e);
            }
        }
    
        await emailLoop(3); 
    } catch (error) {
        console.error('Erro ao adicionar lead a planilha.', error);
    }

    res.status(200).json({ success: true });
}

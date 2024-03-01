require('dotenv').config();
const nodemailer = require('nodemailer');

const sendRequestInfoByEmail = async (req, res) => {
    try {
        const requestDetails = req.body;
    const recipientEmail = requestDetails.ownerDetails.email;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipientEmail,
        subject: `Notification: Submitted Product Import Request Detials`,
        html: `
        <p>Dear applicant,</p>
        <p>Thank you for applying for product import request though Irembo! Below is a copy of the application details we received. </p>
        <h3>Business Owner details </h3>
        <p> <em> Applicant citizenship: </em> ${requestDetails.ownerDetails.citizenship} </p>
        <p> <em> Phone number: </em> ${requestDetails.ownerDetails.phoneNumber} </p>
        <p> <em> Email address: </em> ${requestDetails.ownerDetails.email} </p>
        <p> <em> Business owner address: </em> ${requestDetails.ownerDetails.address} </p>
        <h3>Business details </h3>
        <p> <em> Business Type: </em> ${requestDetails.businessDetails.businessType} </p>
        <p> <em> Company Name: </em> ${requestDetails.businessDetails.companyName} </p>
        <p> <em> TIN number: </em> ${requestDetails.businessDetails.tinNumber} </p>
        <p> <em> Registration date: </em> ${requestDetails.businessDetails.registrationDate} </p>
        <p> <em> Bussiness Address: </em> ${requestDetails.businessDetails.businessAddress} </p>
        <h3>Product Information </h3>
        <h4>Importation details </h4>
        <p> <em> Purpose of importation: </em> ${requestDetails.productDetails.importationPurpose} </p> 
        <h4>Product details </h4>
        <p> <em> Product Category: </em> ${requestDetails.productDetails.productCategory} </p>
        <p> <em> Weight: </em> ${requestDetails.productDetails.weight} </p>
        <p> <em> Unit of measurement: </em> ${requestDetails.productDetails.measurementUnit} </p>
        <p> <em> Product quantity: </em> ${requestDetails.productDetails.productQuantity} </p>
        <p> <em> Description of products: </em> ${requestDetails.productDetails.productDescription} </p>
        </br>
        </br>
        </br>
        <p>If any of the information is wrong please contant us as soon as possible.</p>
        </br>
        </br>
        <p>Irembo Team</p>
        `
    }

    await transport.sendMail(mailOptions);

    res.status(200).json("Email sent successfully!")
    } catch (error) {
        res.status(500).json("Something went wrong, try again.");
    }

}

module.exports = {
    sendRequestInfoByEmail: sendRequestInfoByEmail
}
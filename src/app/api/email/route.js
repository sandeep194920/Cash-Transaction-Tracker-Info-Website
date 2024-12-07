const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
import EmailTemplate from "../../../components/EmailTemplate";

// the below line is as per documentation
// export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(req) {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const { name, email, subject, phone, message } = await req.json();
  console.log("The receiving email is", email);
  // let transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: 'ricky21@ethereal.email',
  //     pass: 'jfPmP4SB2DzZbDm8V1',
  //   },
  // })

  // const receiverEmailOptions = {
  //   to: `Zenorbis <${process.env.SENDER_EMAIL}>`,
  //   subject: `Zenorbis - ${email} - ${name} - ${subject} ${
  //     phone && `- ${phone}`
  //   }`,
  //   text: message,
  // }

  // const emailTemplate = <EmailTemplate name={name} />
  // const htmlTemplate = ReactDOMServer.renderToStaticNodeStream(emailTemplate)

  // const senderEmailOptions = {
  //   to: email,
  //   subject: `Zenorbis - Thank you for contacting us`,
  //   html: htmlTemplate,
  // }

  const msg = {
    to: email, // Change to your recipient
    from: process.env.SENDER_EMAIL, // Change to your verified sender
    subject: "Zenorbis - Thank you for contacting us",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    await sgMail.send(msg).then((res) => {
      console.log(res);
      console.log("The email finally sent");
    });
    console.log("The email is now sent");
    return new Response(JSON.stringify({ message: "Email sent successfully" }));
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Email sending failed" }));
  }

  // try {
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  //   const recieverEmail = await transporter.sendMail(receiverEmailOptions)
  //   console.log('Email recieved:', recieverEmail.response)
  //   const senderEmail = await transporter.sendMail(senderEmailOptions)
  //   console.log('Email sent:', senderEmail.response)
  //   return new Response(
  //     JSON.stringify({
  //       message: 'Email sent successfully',
  //     })
  //   )
  // } catch (error) {
  //   console.error('Error sending email:', error)
  //   return new Response(JSON.stringify({ error: 'Email sending failed' }))
  // }
}

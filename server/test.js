import sendEmail from "./configs/nodemailer.js";

(async () => {
  try {
    const info = await sendEmail({
      to: "emeritus93@gmail.com", // change to your own address for testing
      subject: "Test from Nodemailer + Zoho",
      body: "<h1>Hello!</h1><p>This mail was sent using Zoho SMTP.</p>",
    });
    console.log("Mail sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
  } catch (err) {
    console.error("Failed to send email:", err.message);
    if (err.response) {
      console.error("SMTP Response:", err.response);
    }
  }
})();

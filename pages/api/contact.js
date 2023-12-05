import { mailOptions, transporter } from "../../src/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.phone || !data.message) {
      return res.status(400).json({ message: "bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `New message from ${data.name}`,
        text: `This a test string `,
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Phone: ${data.phone}</p><p>Message: ${data.message}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "bad request" });
};

export default handler;

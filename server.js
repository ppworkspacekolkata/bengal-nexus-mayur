import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Transporter configuration using user's Gmail SMTP and App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bengalnexusexports@gmail.com',
    pass: 'fker usnj jctk fohn' // Gmail App Password
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, company, email, whatsapp, country, enquiry_type, message } = req.body;

  const mailOptions = {
    from: `"Bengal Nexus Exports Portal" <bengalnexusexports@gmail.com>`,
    to: 'bengalnexusexports@gmail.com',
    subject: `New B2B Export Inquiry: ${enquiry_type}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0A327A; border-bottom: 2px solid #F26522; padding-bottom: 10px; margin-top: 0;">New B2B Inquiry Received</h2>
        <p style="color: #4B5563; font-size: 1rem; line-height: 1.5;">A visitor has submitted a quote request from the Bengal Nexus Exports website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f8fafc;">
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left; font-weight: bold; color: #1f2937;">Field</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left; font-weight: bold; color: #1f2937;">Details</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #4B5563; width: 35%;">Client Name</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1f2937;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #4B5563;">Company</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1f2937;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #4B5563;">Work Email</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1f2937;"><a href="mailto:${email}" style="color: #1B8039; text-decoration: underline;">${email || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #4B5563;">WhatsApp/Phone</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1f2937;"><a href="tel:${whatsapp}" style="color: #1B8039; text-decoration: underline;">${whatsapp || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #4B5563;">Destination Country</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1f2937;">${country || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #4B5563;">Enquiry Type</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1f2937; font-weight: bold; color: #0A327A;">${enquiry_type || 'N/A'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #F26522; border-radius: 4px;">
          <h4 style="margin: 0 0 10px 0; color: #1f2937; font-weight: bold;">Message / Specifications:</h4>
          <p style="margin: 0; color: #4B5563; line-height: 1.6; white-space: pre-wrap;">${message || 'No message provided.'}</p>
        </div>
        
        <footer style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center; color: #94a3b8; font-size: 0.85rem;">
          <p style="margin: 0;">Sent via Bengal Nexus Exports Portal Automated Email System.</p>
        </footer>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent to bengalnexusexports@gmail.com`);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fallback to check backend status
app.get('/api/status', (req, res) => {
  res.json({ status: 'active', service: 'begal-nexus-mail-server' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mail server is running on port ${PORT}`);
});

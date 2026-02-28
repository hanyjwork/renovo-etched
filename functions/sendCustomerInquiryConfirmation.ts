import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const body = await req.json();
        const data = body.data || null;

        if (!data || !data.email) {
            return Response.json({ error: 'No inquiry data provided' }, { status: 400 });
        }

        const projectTypeLabels = {
            'full_villa_renovation': 'Full Villa Renovation',
            'villa_extension': 'Villa Extension',
            'kitchen_renovation': 'Kitchen Renovation',
            'bathroom_renovation': 'Bathroom Renovation',
            'internal_works': 'Internal Works',
            'landscaping_pergolas': 'Landscaping & Pergolas',
            'pool': 'Pool Design & Construction',
            'design_consultation': 'Design Consultation',
            'other': 'Other'
        };

        const projectType = projectTypeLabels[data.project_type] || data.project_type;

        const emailBody = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background-color: #2D3436; padding: 40px 20px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; color: #C4A77D; letter-spacing: 2px; }
        .content { padding: 40px 30px; color: #2D3436; }
        .greeting { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
        .message { font-size: 16px; line-height: 1.6; color: #666; margin-bottom: 30px; }
        .details-box { background-color: #FAFAF8; border-left: 4px solid #C4A77D; padding: 20px; margin: 30px 0; }
        .detail-item { margin: 8px 0; color: #666; font-size: 15px; }
        .detail-label { font-weight: 600; color: #2D3436; }
        .contact-info { background-color: #FAFAF8; padding: 25px; border-radius: 8px; margin: 20px 0; }
        .contact-link { color: #C4A77D; text-decoration: none; font-weight: 600; }
        .footer { background-color: #2D3436; color: #ffffff; padding: 30px; text-align: center; font-size: 14px; }
        .footer-location { color: #C4A77D; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header"><div class="logo">RENOVO ETCHED</div></div>
        <div class="content">
            <div class="greeting">Dear ${data.name},</div>
            <div class="message">We have received your request and appreciate your interest in our services. A member of our team will be in touch with you shortly to discuss your project in detail.</div>
            <div class="details-box">
                <div style="font-weight:bold;margin-bottom:15px">Your Inquiry Details:</div>
                <div class="detail-item"><span class="detail-label">Project Type:</span> ${projectType}</div>
                <div class="detail-item"><span class="detail-label">Phone:</span> ${data.phone}</div>
                ${data.message ? `<div class="detail-item"><span class="detail-label">Your Message:</span> ${data.message}</div>` : ''}
            </div>
            <div class="message">We look forward to helping you transform your property into something extraordinary!</div>
            <div class="contact-info">
                <div style="font-weight:bold;margin-bottom:15px">Need Immediate Assistance?</div>
                <div style="margin:10px 0">📞 <a href="tel:+971565440237" class="contact-link">+971 56 544 0237</a></div>
                <div style="margin:10px 0">✉️ <a href="mailto:info@renovo-etched.ae" class="contact-link">info@renovo-etched.ae</a></div>
            </div>
        </div>
        <div class="footer">
            <div style="font-weight:bold;margin-bottom:5px">Renovo Etched Technical Services LLC</div>
            <div class="footer-location">Dubai, UAE</div>
        </div>
    </div>
</body>
</html>`;

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Renovo Etched <onboarding@resend.dev>',
                to: [data.email],
                subject: 'Thank You for Your Inquiry - Renovo Etched',
                html: emailBody
            })
        });

        const result = await res.json();

        if (!res.ok) {
            return Response.json({ error: result.message || 'Failed to send email' }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
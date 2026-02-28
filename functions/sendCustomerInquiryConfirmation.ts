import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { data } = await req.json();

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

        const emailBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background-color: #2D3436; padding: 40px 20px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; color: #C4A77D; letter-spacing: 2px; }
        .content { padding: 40px 30px; color: #2D3436; }
        .greeting { font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #2D3436; }
        .message { font-size: 16px; line-height: 1.6; color: #666; margin-bottom: 30px; }
        .details-box { background-color: #FAFAF8; border-left: 4px solid #C4A77D; padding: 20px; margin: 30px 0; }
        .details-title { font-weight: bold; color: #2D3436; margin-bottom: 15px; font-size: 16px; }
        .detail-item { margin: 8px 0; color: #666; font-size: 15px; }
        .detail-label { font-weight: 600; color: #2D3436; }
        .cta-section { background-color: #C4A77D; padding: 30px; text-align: center; margin: 30px 0; border-radius: 8px; }
        .cta-text { color: #ffffff; font-size: 16px; margin-bottom: 20px; line-height: 1.5; }
        .contact-info { background-color: #FAFAF8; padding: 25px; border-radius: 8px; margin: 20px 0; }
        .contact-item { margin: 10px 0; font-size: 15px; color: #2D3436; }
        .contact-link { color: #C4A77D; text-decoration: none; font-weight: 600; }
        .footer { background-color: #2D3436; color: #ffffff; padding: 30px; text-align: center; font-size: 14px; }
        .footer-company { font-weight: bold; margin-bottom: 5px; }
        .footer-location { color: #C4A77D; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">RENOVO ETCHED</div>
        </div>
        
        <div class="content">
            <div class="greeting">Dear ${data.name},</div>
            
            <div class="message">
                We have received your request and appreciate your interest in our services. A member of our team will be in touch with you shortly to discuss your project in detail.
            </div>
            
            <div class="details-box">
                <div class="details-title">Your Inquiry Details:</div>
                <div class="detail-item"><span class="detail-label">Project Type:</span> ${projectType}</div>
                <div class="detail-item"><span class="detail-label">Phone:</span> ${data.phone}</div>
                ${data.message ? `<div class="detail-item"><span class="detail-label">Your Message:</span> ${data.message}</div>` : ''}
            </div>
            
            <div class="cta-section">
                <div class="cta-text">
                    <strong>What Happens Next?</strong><br>
                    A specialist from our team will review your inquiry and contact you within 24 hours to discuss your project in detail.
                </div>
            </div>
            
            <div class="message">
                We look forward to helping you transform your property into something extraordinary!
            </div>
            
            <div class="contact-info">
                <div class="details-title">Need Immediate Assistance?</div>
                <div class="contact-item">📞 Phone: <a href="tel:+971565440237" class="contact-link">+971 56 544 0237</a></div>
                <div class="contact-item">✉️ Email: <a href="mailto:info@renovo-etched.ae" class="contact-link">info@renovo-etched.ae</a></div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-company">Renovo Etched Technical Services LLC</div>
            <div class="footer-location">Dubai, UAE</div>
        </div>
    </div>
</body>
</html>
        `.trim();

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: data.email,
            subject: 'Thank You for Your Inquiry - Renovo Etched',
            body: emailBody,
            from_name: 'Renovo Etched Technical Services'
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
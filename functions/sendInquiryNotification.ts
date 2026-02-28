import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { data } = await req.json();

        if (!data) {
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

        // Get all admin users to send notification
        const adminUsers = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
        
        if (adminUsers.length === 0) {
            return Response.json({ error: 'No admin users found to notify' }, { status: 400 });
        }

        const emailBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background-color: #2D3436; padding: 30px 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: bold; color: #C4A77D; letter-spacing: 2px; }
        .alert { background-color: #C4A77D; color: white; padding: 15px; text-align: center; font-weight: bold; }
        .content { padding: 30px; }
        .label { font-weight: bold; color: #2D3436; margin-top: 15px; }
        .value { color: #666; margin-bottom: 10px; }
        .message-box { background-color: #FAFAF8; padding: 20px; border-left: 4px solid #C4A77D; margin: 20px 0; }
        .footer { background-color: #2D3436; color: white; padding: 20px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">RENOVO ETCHED</div>
        </div>
        <div class="alert">🔔 New Inquiry Received</div>
        <div class="content">
            <div class="label">Customer Name:</div>
            <div class="value">${data.name}</div>
            
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}" style="color: #C4A77D;">${data.email}</a></div>
            
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}" style="color: #C4A77D;">${data.phone}</a></div>
            
            <div class="label">Project Type:</div>
            <div class="value">${projectType}</div>
            
            ${data.message ? `
            <div class="label">Message:</div>
            <div class="message-box">${data.message}</div>
            ` : '<div class="value" style="font-style: italic;">No additional message provided.</div>'}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 13px;">
                Submitted: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
            </div>
        </div>
        <div class="footer">
            Renovo Etched Technical Services LLC | Dubai, UAE
        </div>
    </div>
</body>
</html>
        `.trim();

        // Send email to all admin users
        for (const admin of adminUsers) {
            await base44.asServiceRole.integrations.Core.SendEmail({
                to: admin.email,
                subject: `New Inquiry: ${projectType} - ${data.name}`,
                body: emailBody,
                from_name: 'Renovo Etched Website'
            });
        }



        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
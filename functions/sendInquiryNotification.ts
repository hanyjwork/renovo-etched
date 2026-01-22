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

        const emailBody = `
New Inquiry Received

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${projectType}

${data.message ? `Message:\n${data.message}` : 'No additional message provided.'}

---
This inquiry was submitted on ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
        `.trim();

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: 'info@renovo-etched.ae',
            subject: `New Inquiry: ${projectType} - ${data.name}`,
            body: emailBody,
            from_name: 'Renovo Etched Website'
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
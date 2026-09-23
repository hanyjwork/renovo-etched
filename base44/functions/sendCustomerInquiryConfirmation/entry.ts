import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

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

        const subject = 'Thank You for Your Inquiry - Renovo Etched';
        const emailBody = `Dear ${data.name},

Thank you for reaching out to Renovo Etched! We have received your inquiry and a member of our team will be in touch with you shortly.

Your Inquiry Details:
- Project Type: ${projectType}
- Phone: ${data.phone}
${data.message ? `- Message: ${data.message}` : ''}

We look forward to helping you transform your property into something extraordinary!

For immediate assistance, you can reach us at:
📞 +971 56 544 0237
✉️ info@renovo-etched.ae

Best regards,
Renovo Etched Technical Services LLC
Dubai, UAE`;

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: data.email,
            subject,
            body: emailBody
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
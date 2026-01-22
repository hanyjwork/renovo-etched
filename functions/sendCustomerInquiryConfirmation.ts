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
Dear ${data.name},

Thank you for contacting Renovo Etched Technical Services LLC!

We have received your inquiry regarding ${projectType} and appreciate your interest in our services.

Your Inquiry Details:
- Project Type: ${projectType}
- Phone: ${data.phone}
${data.message ? `- Your Message: ${data.message}` : ''}

A specialist from our team will review your inquiry and contact you within 24 hours to discuss your project in detail.

In the meantime, if you have any urgent questions, please feel free to reach us at:
- Phone: +971 56 544 0237
- Email: info@renovo-etched.ae

We look forward to helping you transform your property!

Best regards,
Renovo Etched Technical Services LLC
Dubai, UAE
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
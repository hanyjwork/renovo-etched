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

        const adminUsers = await base44.asServiceRole.entities.User.filter({ role: 'admin' });

        if (adminUsers.length === 0) {
            return Response.json({ error: 'No admin users found to notify' }, { status: 400 });
        }

        const subject = `New Inquiry: ${projectType} - ${data.name}`;
        const body = `New inquiry received from the website:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${projectType}
${data.message ? `\nMessage:\n${data.message}` : ''}

Submitted: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}`;

        // Send via Base44 SendEmail integration to each admin
        await Promise.all(
            adminUsers.map(admin =>
                base44.asServiceRole.integrations.Core.SendEmail({
                    to: admin.email,
                    subject,
                    body
                })
            )
        );

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});
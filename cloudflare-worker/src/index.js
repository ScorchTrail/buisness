export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });
        }

        if (request.method !== 'POST') {
            return new Response('Method not allowed', { status: 405 });
        }

        try {
            const body = await request.json();
            const { name, email, company, phone, status = 'Started Discovery Form' } = body;

            const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'SRTtrail Leads <onboarding@resend.dev>',
                    to: 's.trail7878@gmail.com',
                    subject: `New Lead Started: ${name}`,
                    html: `
                        <h2>New Discovery Form Started</h2>
                        <p><strong>Status:</strong> ${status}</p>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Company:</strong> ${company}</p>
                        <hr>
                        <p><em>The visitor has completed the first step of the discovery form.</em></p>
                    `
                })
            });

            if (!resendResponse.ok) {
                return new Response(JSON.stringify({ error: 'Failed to send email' }), {
                    status: 500,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
            }

            return new Response(JSON.stringify({ success: true }), {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            return new Response('Internal Server Error', { status: 500 });
        }
    }
};
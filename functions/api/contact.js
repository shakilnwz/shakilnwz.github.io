export async function onRequestPost(context) {
    try {
        const { request, env } = context;

        const contentType = request.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
            return new Response(
                JSON.stringify({ error: "Invalid content type, expected application/json." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !name.trim()) {
            return new Response(
                JSON.stringify({ error: "Name is required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return new Response(
                JSON.stringify({ error: "A valid email address is required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        if (!message || !message.trim()) {
            return new Response(
                JSON.stringify({ error: "Message cannot be empty." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const apiKey = env.RESEND_API_KEY;
        if (!apiKey) {
            return new Response(
                JSON.stringify({
                    error: "Email service not configured. Please set RESEND_API_KEY in Cloudflare Pages settings."
                }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        const toEmail = env.TO_EMAIL || "shakilnwz@gmail.com";
        const fromEmail = env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

        // Send email via Resend API
        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: fromEmail,
                to: toEmail,
                reply_to: email.trim(),
                subject: `New Contact Form Message from ${name.trim()}`,
                html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                        <h2 style="color: #4f46e5; margin-top: 0;">New Contact Form Message</h2>
                        <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
                        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                        <p style="margin: 8px 0;"><strong>Message:</strong></p>
                        <div style="white-space: pre-wrap; background: #f9fafb; padding: 16px; border-radius: 6px; font-size: 15px; border: 1px solid #f3f4f6;">${escapeHtml(message.trim())}</div>
                    </div>
                `,
            }),
        });

        if (!resendResponse.ok) {
            const errText = await resendResponse.text();
            console.error("Resend API error:", errText);
            return new Response(
                JSON.stringify({ error: "Unable to deliver message right now. Please try again later." }),
                { status: 502, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ success: true, message: "Your message has been sent successfully!" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: err.message || "An unexpected error occurred." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

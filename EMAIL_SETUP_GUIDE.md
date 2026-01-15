# Email Setup Guide - EmailJS Integration

Your contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account (dalilahmer1212@gmail.com)
5. Copy the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** Contact Form Portfolio

**Subject:** New Contact from {{name}}

**Content:**
```
You have received a new message from your portfolio:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., "abcDEF123ghiJKL")
3. Copy this key

## Step 5: Update Your Code
Open `script.js` and replace these three placeholders:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your Public Key from Step 4
```

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
                 // ↑ Service ID from Step 2  ↑ Template ID from Step 3
```

### Example:
```javascript
emailjs.init("abcDEF123ghiJKL");
```

```javascript
emailjs.sendForm('service_abc123', 'template_xyz789', contactForm)
```

## Step 6: Test Your Form
1. Open your portfolio in a browser
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox for the message

## Troubleshooting

### Not receiving emails?
- Check your EmailJS dashboard → **Email Services** → ensure service is connected
- Check spam/junk folder
- Verify all IDs are correct in `script.js`
- Open browser console (F12) to see any error messages

### "Failed to send" error?
- Make sure you've verified your email with EmailJS
- Check that your Public Key is correct
- Ensure you haven't exceeded the 200 emails/month limit

### Form fields not appearing in email?
- Make sure form input names match template variables:
  - `name` → `{{name}}`
  - `email` → `{{email}}`
  - `message` → `{{message}}`

## Alternative: FormSubmit (No signup required)

If you prefer not to use EmailJS, you can use FormSubmit instead:

1. Change your form action in `index.html`:
```html
<form class="contact-form" action="https://formsubmit.co/dalilahmer1212@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="New Portfolio Contact">
    <input type="hidden" name="_captcha" value="false">
    <!-- rest of your form -->
</form>
```

2. Remove the EmailJS script from `index.html`
3. Remove the EmailJS code from `script.js`

---

**Need help?** Check the [EmailJS documentation](https://www.emailjs.com/docs/)

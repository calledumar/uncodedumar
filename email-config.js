// Email Configuration for Contact Form Notifications
// Update these settings with your email credentials

export const emailConfig = {
  // Email service configuration
  service: 'gmail', // Changed from 'outlook' to 'gmail' for better reliability
  
  // Your email credentials
  auth: {
    user: '', // Replace with your Gmail address
    pass: '' // Replace with your Gmail app password
  },
  
  // Where to send notifications
  notificationEmail: 'chrisboggs1@outlook.com', // Keep this as your notification email
  
  // Email template settings
  template: {
    subject: 'New Contact Form Submission - {email}',
    fromName: 'Portfolio Contact Form',
    replyTo: '{email}' // Will reply to the contact's email
  }
};

// Instructions for setting up Gmail email notifications:

/*
1. GMAIL SETUP (RECOMMENDED):
   - Go to your Google Account settings: https://myaccount.google.com/
   - Enable 2-Factor Authentication:
     * Go to Security > 2-Step Verification
     * Turn on 2-Step Verification
   - Generate an App Password:
     * Go to Security > 2-Step Verification > App passwords
     * Select "Mail" from the dropdown
     * Click "Generate"
     * Copy the 16-character password
     * Use this app password in the 'pass' field above

2. OUTLOOK SETUP (Alternative):
   - Enable 2-Factor Authentication
   - Generate an App Password from Microsoft Account settings
   - Use your email and app password

3. SECURITY NOTES:
   - Never commit your real email credentials to version control
   - Use environment variables in production
   - Consider using services like SendGrid or Mailgun for production
*/

// Example environment variable usage (for production):
/*
export const emailConfig = {
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  notificationEmail: process.env.NOTIFICATION_EMAIL
};
*/

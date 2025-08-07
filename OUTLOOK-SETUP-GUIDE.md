# 📧 Outlook Email Setup Guide

## 🔧 Fix for "Basic Authentication Disabled" Error

The error you're seeing means Outlook requires an **App Password** instead of your regular password.

## 🚀 Step-by-Step Outlook Setup

### 1. Enable 2-Factor Authentication (2FA)

1. **Go to Microsoft Account Security:**
   - Visit: https://account.microsoft.com/security
   - Sign in with your Outlook account

2. **Enable 2-Step Verification:**
   - Click on "Security" in the left menu
   - Find "Two-step verification" and click "Turn on"
   - Follow the setup process (usually involves phone verification)

### 2. Generate App Password

1. **Go to App Passwords:**
   - Visit: https://account.microsoft.com/security
   - Click on "Security" → "Advanced security options"
   - Scroll down to "App passwords"

2. **Create New App Password:**
   - Click "Create a new app password"
   - Give it a name like "Portfolio Contact Form"
   - Click "Next"
   - Copy the generated password (16 characters)

### 3. Update Your Configuration

Edit `email-config.js` and replace the password:

```javascript
export const emailConfig = {
  service: 'outlook',
  auth: {
    user: 'chrisboggs1@outlook.com',
    pass: 'YOUR-16-CHARACTER-APP-PASSWORD' // Replace with the app password you generated
  },
  notificationEmail: 'm.umarriaz1@outlook.com'
};
```

### 4. Alternative: Use Gmail (Easier Setup)

If Outlook continues to give issues, Gmail is often easier:

```javascript
export const emailConfig = {
  service: 'gmail',
  auth: {
    user: 'your-gmail@gmail.com',
    pass: 'your-gmail-app-password'
  },
  notificationEmail: 'm.umarriaz1@outlook.com'
};
```

## 🔍 Troubleshooting Outlook Issues

### Common Problems:

1. **"Basic authentication is disabled"**
   - ✅ Solution: Use App Password instead of regular password
   - ✅ Make sure 2FA is enabled

2. **"Invalid login"**
   - ✅ Check your email address is correct
   - ✅ Verify the App Password is copied correctly
   - ✅ Make sure there are no extra spaces

3. **"Connection timeout"**
   - ✅ Check your internet connection
   - ✅ Try using Gmail instead (often more reliable)

## 🧪 Test Your Setup

After updating the password, run:

```bash
node test-email.js
```

## 📧 Alternative: Use Gmail

If Outlook continues to be problematic, Gmail is often more reliable:

1. **Enable 2FA on Gmail:**
   - Go to Google Account settings
   - Security → 2-Step Verification → Turn on

2. **Generate Gmail App Password:**
   - Security → 2-Step Verification → App passwords
   - Select "Mail" → Generate
   - Use the 16-character password

3. **Update config:**
   ```javascript
   service: 'gmail',
   auth: {
     user: 'your-gmail@gmail.com',
     pass: 'your-gmail-app-password'
   }
   ```

## ✅ Success Indicators

When working correctly, you should see:
- ✅ "Email configuration looks good!"
- ✅ "Email notification sent successfully"
- ✅ Test email received in your inbox

---

**Need help? Try Gmail setup - it's often more reliable than Outlook! 🎯**

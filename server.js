import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist')); // Serve the built React app

// Store contact submissions (in a real app, you'd use a database)
const contactSubmissions = [];

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  try {
    const { email, phone, message } = req.body;
    
    // Basic validation
    if (!email || !phone || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please enter a valid email address' 
      });
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    };

    // Store the submission
    contactSubmissions.push(submission);

    // Save to file (in a real app, you'd save to a database)
    const submissionsFile = path.join(__dirname, 'contact-submissions.json');
    fs.writeFileSync(submissionsFile, JSON.stringify(contactSubmissions, null, 2));

    // Log the submission (you can replace this with email notifications, etc.)
    console.log('New contact form submission:', submission);

    res.status(200).json({ 
      message: 'Message sent successfully!',
      submissionId: submission.id 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// API endpoint to get all submissions (for admin purposes)
app.get('/api/contact', (req, res) => {
  res.json(contactSubmissions);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/contact`);
}); 
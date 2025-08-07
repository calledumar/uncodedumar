import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read contact submissions
function getContactSubmissions() {
  try {
    const filePath = path.join(__dirname, 'contact-submissions.json');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log('❌ No contact submissions file found');
      return [];
    }
    
    // Read and parse the file
    const data = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(data);
    
    return submissions;
  } catch (error) {
    console.error('❌ Error reading contact submissions:', error.message);
    return [];
  }
}

// Function to display submissions in a nice format
function displaySubmissions(submissions) {
  if (submissions.length === 0) {
    console.log('📭 No contact form submissions found');
    return;
  }
  
  console.log(`📧 Found ${submissions.length} contact form submission(s):\n`);
  
  submissions.forEach((submission, index) => {
    console.log(`📋 Submission #${index + 1}:`);
    console.log(`   ID: ${submission.id}`);
    console.log(`   Email: ${submission.email}`);
    console.log(`   Phone: ${submission.phone}`);
    console.log(`   Message: ${submission.message}`);
    console.log(`   Timestamp: ${new Date(submission.timestamp).toLocaleString()}`);
    console.log('   ' + '─'.repeat(50));
  });
}

// Function to export data to different formats
function exportData(submissions, format = 'json') {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  switch (format.toLowerCase()) {
    case 'csv':
      const csvContent = [
        'ID,Email,Phone,Message,Timestamp',
        ...submissions.map(s => 
          `"${s.id}","${s.email}","${s.phone}","${s.message.replace(/"/g, '""')}","${s.timestamp}"`
        )
      ].join('\n');
      
      fs.writeFileSync(`contact-submissions-${timestamp}.csv`, csvContent);
      console.log(`✅ Exported to contact-submissions-${timestamp}.csv`);
      break;
      
    case 'json':
      fs.writeFileSync(`contact-submissions-${timestamp}.json`, JSON.stringify(submissions, null, 2));
      console.log(`✅ Exported to contact-submissions-${timestamp}.json`);
      break;
      
    default:
      console.log('❌ Unsupported format. Use "json" or "csv"');
  }
}

// Main execution
console.log('🔍 Contact Form Data Reader\n');

const submissions = getContactSubmissions();
displaySubmissions(submissions);

// Export the data automatically
if (submissions.length > 0) {
  console.log('\n📤 Exporting data...');
  exportData(submissions, 'json');
  exportData(submissions, 'csv');
}

console.log('\n✅ Data retrieval complete!');

// Test script to verify Google Sheets integration
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDnTDXlsdQzSDxe5JKxoW5Abz33tDVmTjHpk7N2RoRPYBye4N4M_pZMXyRMUo2l5QA/exec";

const testData = {
  name: "Test User",
  businessName: "Test Company",
  email: "test@example.com",
  phone: "+91-9876543210",
  website: "https://test.com",
  budget: "$500 - $1,000",
  message: "This is a test submission from debugging script"
};

console.log("Sending test data to Google Sheets...");
console.log("Data:", testData);

fetch(GOOGLE_SCRIPT_URL, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
.then(() => {
  console.log("✅ Request sent successfully!");
  console.log("⚠️ Note: With 'no-cors' mode, we cannot read the response");
  console.log("📊 Please check your Google Sheet to verify if data was added");
})
.catch(error => {
  console.error("❌ Error:", error);
});

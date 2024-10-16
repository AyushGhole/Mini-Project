// Mock data for order details, this can be dynamic based on your backend
const orderNumber = "#789654";
const deliveryDate = "2 - 3 hrs of the order placed";

// Populating the order number and delivery date dynamically
document.getElementById("order-number").textContent = orderNumber;
document.getElementById("delivery-date").textContent = deliveryDate;

// Function to redirect the user to the home page
function goToHomePage() {
  window.location.href = "index.html"; // Replace with your home page URL
}

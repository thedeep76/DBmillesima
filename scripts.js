// Sign Up Form 
$('#signupForm').on('submit', function (e) {
    e.preventDefault(); 
    alert('Thank you for signing up!'); 
    window.location.href = 'products.html'; 
  });
  
  // Login Form 
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
    window.location.href = 'products.html'; 
  });
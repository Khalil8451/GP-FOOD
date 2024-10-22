
  document.addEventListener("DOMContentLoaded", function () {
    const userId = localStorage.getItem("loggedInUserId");
    const userLink = document.getElementById("userLink");

    if (userId) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.id == userId);
      
      if (user) {
        userLink.innerHTML = `
          <span class="welcome-username">Welcome, ${user.username}!</span>
          <button class="btn" id="logoutBtn" style="margin-left: 10px;">Logout</button>
        `;
        
        document.getElementById("logoutBtn").addEventListener("click", function() {
          localStorage.removeItem("loggedInUserId");
          userLink.innerHTML = '<a aria-label="Login" href="login.html">LOGIN</a>';
        });
      }
    }
  });

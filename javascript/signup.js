function setupToggle(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    toggle.addEventListener("click", function () {
      const type = input.type === "password" ? "text" : "password";
      input.type = type;

      this.classList.toggle("fi-rr-eye");
      this.classList.toggle("fi-rr-eye-crossed");
    });
  }

  setupToggle("password", "togglePassword");
  setupToggle("confirmPassword", "toggleConfirm");

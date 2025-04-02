function appendToDisplay(value) {
        document.getElementById("display").value += value;
      }
      function clearDisplay() {
        document.getElementById("display").value = "";
      }
      function backspace() {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
      }
      function calculate() {
        try {
          document.getElementById("display").value = eval(
            document.getElementById("display").value
          );
        } catch (error) {
          document.getElementById("display").value = "ERROR";
        }
      }
      // Dark Mode Toggle
      document
        .getElementById("themeToggle")
        .addEventListener("click", function () {
          document.body.classList.toggle("dark");
          let icon = document.getElementById("themeToggle");
          if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
          } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
          }
        });

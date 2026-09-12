document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var nav = document.getElementById("nav");

  if (menu && nav) {
    menu.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var openCalc = document.getElementById("openCalc");
  var closeCalc = document.getElementById("closeCalc");
  var panel = document.getElementById("calcPanel");

  if (openCalc && panel) {
    openCalc.addEventListener("click", function () {
      panel.hidden = false;
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (closeCalc && panel) {
    closeCalc.addEventListener("click", function () {
      panel.hidden = true;
    });
  }

  var form = document.getElementById("debtForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var income = Number(document.getElementById("income").value || 0);
      var expenses = Number(document.getElementById("expenses").value || 0);
      var payments = Number(document.getElementById("payments").value || 0);
      var remaining = income - expenses - payments;

      var result = document.getElementById("result");
      var title = document.getElementById("resultText");
      var message = document.getElementById("resultMsg");

      result.hidden = false;

      if (remaining < 0) {
        title.textContent = "Your monthly obligations are higher than the income entered.";
        message.textContent = "This may be a useful time to review your options and learn more about debt and bankruptcy resources.";
      } else {
        title.textContent = "Estimated monthly amount remaining: $" + remaining.toLocaleString();
        message.textContent = "Use this as an educational snapshot only. Your complete financial situation may include factors not shown here.";
      }
    });
  }
});

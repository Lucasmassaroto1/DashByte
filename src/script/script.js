const statusBot = "online";
const statusSpan = document.querySelector(".card-body .status");

statusSpan.textContent = statusBot === "online" ? "Online" : "Offline";
statusSpan.classList.remove("online", "offline");
statusSpan.classList.add(statusBot);


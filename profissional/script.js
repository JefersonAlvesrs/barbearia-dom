// CONFIGURAÇÃO DO CLIENTE: substitua pelo WhatsApp real, com DDI 55 + DDD + número.
const WHATSAPP_NUMBER = "5554999999999";

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  }),
);

const serviceSelect = document.getElementById("booking-service");
document.querySelectorAll(".service-book").forEach((button) => {
  button.addEventListener("click", () => {
    serviceSelect.value = button.dataset.service;
    document
      .getElementById("agendar")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

function sendWhatsApp(message) {
  if (WHATSAPP_NUMBER === "5554999999999") {
    alert(
      "Este é um site demonstrativo. Configure o número real do WhatsApp no arquivo script.js para ativar o agendamento.",
    );
    return;
  }
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

document.getElementById("booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("booking-name").value.trim();
  const service = serviceSelect.value;
  if (!name || !service) return;
  sendWhatsApp(
    `Olá! Meu nome é ${name}. Gostaria de agendar ${service.toLowerCase()} na Barbearia Dom. Quais horários estão disponíveis?`,
  );
});

document.getElementById("year").textContent = new Date().getFullYear();

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

document.getElementById("year").textContent = new Date().getFullYear();

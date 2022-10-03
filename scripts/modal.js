const buttonsControllersModal = document.querySelectorAll(
  "[data-control-modal]"
);
for (let i = 0; i < buttonsControllersModal.length; i++) {
  buttonsControllersModal[i].addEventListener("click", () => {
    let modalId = buttonsControllersModal[i].getAttribute("data-control-modal");

    document.getElementById(modalId).classList.toggle("show__modal");
  });
}

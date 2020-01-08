const showModal = () => {
    const containerModal = document.querySelector(".container-modal");
    containerModal.style.opacity = "1";
    containerModal.style.zIndex = "1";

    const modal = document.querySelector(".modal");
    modal.style.top = "0px";
}

const hideModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.top = "-10000px";

    const containerModal = document.querySelector(".container-modal");
    containerModal.style.opacity = "0";
    containerModal.style.zIndex = "-1";
}

document.querySelector(".container .modal-btn").addEventListener("click", () => {
    showModal();
});

document.querySelector(".container-modal .modal .modal-btn-group .modal-btn").addEventListener("click", () => {
    hideModal();
});
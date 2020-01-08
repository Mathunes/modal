const showModal = () => {
    const containerModal = document.querySelector(".container-modal");
    containerModal.style.opacity = "1";
    containerModal.style.zIndex = "1";

    const modal = document.querySelector(".modal");
    modal.style.top = "0px";
}

document.querySelector(".container .modal-btn").addEventListener("click", () => {
    showModal();
});
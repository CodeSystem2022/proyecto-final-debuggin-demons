const motraraAlerta = (mensaje) => {


    const toastContainer = document.createElement("div");
    toastContainer.classList.add("position-fixed", "bottom-0", "end-0", "p-3");
    toastContainer.style.zIndex = "11";

    const toast = document.createElement("div");
    toast.id = "liveToast";
    toast.classList.add("toast", "hide");
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");

    const toastHeader = document.createElement("div");
    toastHeader.classList.add("toast-header");

    const toastImage = document.createElement("img");
    toastImage.src = "../frontend/src/img/logo.jpg";
    toastImage.classList.add("rounded", "me-2");
    toastImage.alt = "...";

    const toastStrong = document.createElement("strong");
    toastStrong.classList.add("me-auto");
    toastStrong.textContent = "Debugging Demons Games";

    const toastSmall = document.createElement("small");
    toastSmall.textContent = "11 mins ago";

    const toastButton = document.createElement("button");
    toastButton.type = "button";
    toastButton.classList.add("btn-close");
    toastButton.setAttribute("data-bs-dismiss", "toast");
    toastButton.setAttribute("aria-label", "Close");

    toastHeader.appendChild(toastImage);
    toastHeader.appendChild(toastStrong);
    toastHeader.appendChild(toastSmall);
    toastHeader.appendChild(toastButton);

    const toastBody = document.createElement("div");
    toastBody.classList.add("toast-body");
    toastBody.textContent = mensaje;

    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);

    toastContainer.appendChild(toast);

    document.body.appendChild(toastContainer);

}
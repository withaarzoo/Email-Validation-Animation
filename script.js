const regex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
        "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
);

document.querySelectorAll(".email-input").forEach((container) => {
    let input = container.querySelector("input");

    input.addEventListener("keyup", (e) =>
        container.classList.toggle("valid", regex.test(input.value))
    );
});

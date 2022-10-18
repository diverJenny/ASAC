const StealingWarning_BodyBtn = document.querySelector(".StealingWarning_BodyBtn");
const StealingWarning_Body = document.querySelector(".StealingWarning_Body");

StealingWarning_BodyBtn.addEventListener("click", () => {
    if (StealingWarning_Body.style.display == "flex") {
        StealingWarning_Body.style.display = "none";
    }
    else {
        StealingWarning_Body.style.display = "flex";
    }
});
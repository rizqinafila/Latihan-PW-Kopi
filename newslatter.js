document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("langganan");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked){
            alert("Terimakasih telah berlangganan!");
        } else{
            alert("Langganan dibatalkan");
        }
    });
});
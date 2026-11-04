document.addEventListener("DOMContentLoaded", () => {
    console.log("Stargaze cargado correctamente 🚀");
    const likeBtn = document.getElementById("likeBtn");
    const likeCount = document.getElementById("likeCount");

    if (likeBtn && likeCount) {
        let liked = false;
        likeBtn.addEventListener("click", () => {
            let currentLikes = parseInt(likeCount.textContent);
            if (!liked) {
                likeCount.textContent = currentLikes + 1;
                likeBtn.style.color = "#1877f2";
                liked = true;
            } else {
                likeCount.textContent = currentLikes - 1;
                likeBtn.style.color = "#65676b";
                liked = false;
            }
        });
    }
});
const followButtons = document.querySelectorAll(".follow-btn");
    followButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.style.display = "none";
        });
    });
   const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function ejecutarBusqueda() {
        const texto = searchInput.value.trim();
        if (texto !== "") {
            alert(texto);
        }
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", ejecutarBusqueda);
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                ejecutarBusqueda();
            }
        });
    }
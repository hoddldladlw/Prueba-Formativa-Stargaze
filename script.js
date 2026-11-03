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
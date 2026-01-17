const button = document.querySelectorAll(".btn-aln button")
const Albums_Btn = button[0]
const Extra_Album = document.getElementsByClassName("Extra_Album");
const Album_Search = document.querySelectorAll(".search input");
// const Album_srhBtn = document.querySelectorAll(".search button");
const Album_Finding = Album_Search[0];
// const Album_submit = Album_srhBtn[0];
const Album_cards = document.getElementsByClassName("Album-card");


    Album_Finding.addEventListener("input", () => {
        const Searched = Album_Finding.value.toLowerCase().trim();

        Array.from(Album_cards).forEach(card => {
            const title = card.querySelector(".album-title").textContent.toLowerCase();
            const description = card.querySelector(".Album_text").textContent.toLowerCase();

            if (title.includes(Searched) || description.includes(Searched)) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });

    })


Albums_Btn.addEventListener("click", () => {
    for (let albums of Extra_Album) {
        albums.classList.toggle("show");
    }


    if (Albums_Btn.textContent === "View More") {
        Albums_Btn.textContent = "View Less";
    }
    else {
        Albums_Btn.textContent = "View More";
    }
})

const magazine_btn = button[1]
const extra_magazines = document.getElementsByClassName("Extra_magazine");

magazine_btn.addEventListener("click", () => {
    for (let magazine of extra_magazines) {
        magazine.classList.toggle("show");
    }

    if (magazine_btn.textContent === "View More") {
        magazine_btn.textContent = "View Less";
    }
    else {
        magazine_btn.textContent = "View More";
    }
})
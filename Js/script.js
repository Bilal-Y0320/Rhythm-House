const button = document.querySelectorAll(".btn-aln button")
const Albums_Btn = button[0]
const Extra_Album = document.getElementsByClassName("Extra_Album");

Albums_Btn.addEventListener("click", () => {
    for(let albums of Extra_Album){
        albums.classList.toggle("show");
    }


   if (Albums_Btn.textContent === "View More"){
    Albums_Btn.textContent = "View Less";
   }
   else{
    Albums_Btn.textContent = "View More";
   }
})

const magazine_btn = button[1]
const extra_magazines = document.getElementsByClassName("Extra_magazine");

magazine_btn.addEventListener("click", () => {
    for(let magazine of extra_magazines){
        magazine.classList.toggle("show");
    }

    if(magazine_btn.textContent === "View More"){
        magazine_btn.textContent = "View Less";
    }
    else{
        magazine_btn.textContent = "View More";
    }
})
const Albums_Btn = document.getElementById("btn-aln");
const Extra_Album = document.getElementsByClassName("Extra_Album");

Albums_Btn.addEventListener("click", () => {
    for(let albums of Extra_Album){
        albums.classList.toggle("show");
    }
})
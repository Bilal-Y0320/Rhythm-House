const Albums_Btn = document.getElementById("btn-aln");
const Extra_Album = document.getElementsByClassName("Extra_Album");

Albums_Btn.addEventListener("click", function () {
    for(let album of Extra_Album){
        album.classList.toggle("show");
    }
})
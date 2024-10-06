/*Header intersecting div X set class of a X to activePage

function currentPage() {
screenTop
}

console.log(screenTop);
*/
const topBtn = document.getElementsByClassName("backToTop")[0];
function backToTop() {
  window.scrollTo(0, document.querySelector(".moon"));
}
topBtn.addEventListener("click", backToTop);

let audio = document.createElement("audio");
audio.src = "./HoliznaCC0 - Space!.mp3";
audio.autoplay = true;
audio.loop = true;

/* gallery- fullscreen */

function FullView(ImgLink){
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("FullImageView").style.display = "block";
}
function CloseFullView() {
  document.getElementById("FullImageView").style.display = "none"
}
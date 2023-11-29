function CheckWidht(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log("Browser width: " + w + ", height: " + h + ".");
}
// JavaScript function to reload the page
function reloadPage() {
    location.reload();
    }
  
// Add click event listener to the button
document.getElementById('reloadButton').addEventListener('click', reloadPage);
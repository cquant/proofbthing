/* Prevents links from opening in Mobile Safari. https://gist.github.com/1042026 */
(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

function getOrientationText() {
  var displayStr = "";
  switch(window.orientation) {
    case 0:
      displayStr += "Portrait";
      break;
    case -90:
      displayStr += "Landscape (right/clockwise)";
      break;
    case 90:
      displayStr += "Landscape (left/counterclockwise)";
      break;
    case 180:
      displayStr += "Portrait (upside-down)";
      break;
    default:
      displayStr += "None (not-supported)";
      break;
  }
  return displayStr;
}

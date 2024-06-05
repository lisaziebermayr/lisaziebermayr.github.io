var tooltipHyper = document.getElementById("hyperTooltip");
var tooltipArchive = document.getElementById("archiveTooltip")

addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    tooltipHyper.style.top = (y+10) + "px";
    tooltipHyper.style.left = (x+10)+"px";

    tooltipArchive.style.top = (y+10) + "px";
    tooltipArchive.style.left = (x+10)+"px";

})

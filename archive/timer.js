//const popup = document.querySelector(".popup");
// const windowFeature = "width=600, height=600";
// const handle = window.open(
// "./exodos.html",
// "EXODOS",
// popup
// );


const introductionpop = document.getElementById("introduction");
const parodospop = document.getElementById("parodos");
const episodepop = document.getElementById("episode");
const stasimonpop = document.getElementById("stasimon");
const exodospop = document.getElementById("exodos");

const introduction = `
    <a href="./introduction.html" target="popup" onclick="window.open('./introduction.html', 'popup', 'width=500,height=500'); return false;">
    <img src="./media/boat.gif" width="auto" height="200px">
    </a>
`
const parodos = `
    <a href="./parodos.html" target="popup" onclick="window.open('./parodos.html', 'popup', 'width=500,height=500'); return false;">
    <img src="./media/waterreflections.gif" width="auto" height="200px">
    </a>
`

const episode = `
    <a href="./episode.html" target="popup" onclick="window.open('./episode.html', 'popup', 'width=500,height=500'); return false;">
    <img src="./media/ocean.gif" width="auto" height="200px"">
    </a>
`

const stasimon = `
    <a href="./stasimon.html" target="popup" onclick="window.open('./stasimon.html', 'popup', 'width=500,height=500'); return false;">
    <img src="./media/ice sound.gif" width="auto" height="200px">
    </a>
`

const exodos = `
    <a href="./exodos.html" target="popup" onclick="window.open('./exodos.html', 'popup', 'width=500,height=500'); return false;">
    <img src="./media/Quiet Morning.gif" width="auto" height="200px">
    </a>
`

    setTimeout(() => {
        console.log("first popup");
        introductionpop.innerHTML = introduction;
    }, 5000);

    setTimeout(() => {
        console.log("second popup");
        parodospop.innerHTML = parodos;
    }, 10000);

    setTimeout(() => {
        console.log("third popup");
        episodepop.innerHTML = episode;
    }, 15000);

    setTimeout(() => {
        console.log("fourth popup");
        stasimonpop.innerHTML = stasimon;
    }, 20000);

    setTimeout(() => {
        console.log("fiftn popup");
        exodospop.innerHTML = exodos;
    }, 25000);


//popup without link; here we HAVE to give permission on browser side, its not really intuitive.
//TODO: Make the timer work

// function selfPop() {
//     setTimeout(() => {
//         console.log("first popup");
//         handle;
//         // functionCount ++;
//     }, 5000);


// };


//popup with link; this here works just fine




///the trashcan
//popup.innerHTML = handle



// let counter = 0;
// return function selfPop(){
//     counter ++;
//     if (counter > 1){
//         return "what do you mean?";
//     }
// };






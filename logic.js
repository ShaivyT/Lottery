let students = ["Shaivy", "Arushi", "Rajvi", "Avinash", "Ingrid", "Tanisha", "Tianna", "Swasti", "Prashant"];

function generateLottery() {
    for(let i = students.length - 1; i>= 0; i--) {
        let swapIdx = Math.floor(Math.random() * i);
        let temp = students[swapIdx];
        students[swapIdx] = students[i];
        students[i] = temp;
    } 

    let Einstein = students.slice(0, 3);
    let Newton = students.slice(3, 6);
    let Tesla = students.slice(6, 9);

    document.getElementById("team1").innerHTML = Einstein;
    document.getElementById("team2").innerHTML = Newton;
    document.getElementById("team3").innerHTML = Tesla;
}


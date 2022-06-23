let rundenButton = document.getElementById("rundenButton");
let text = document.getElementById("infoID");
let laenge = document.getElementById("selectID").value;

let phase = "start";
let ergebnis = [];
let ergebnisBackup = [];

rundenButton.addEventListener("click", function handleklick() {
    //Runden
    if (phase == "start") {
        let laenge = document.getElementById("selectID").value;
        phase = "setzen";
        console.log("laenge: " + laenge);
        return;
    }

    // Setzen der zu erratenden Zahlen
    if (phase == "setzen") {
        document.getElementById("phaseTitle").innerHTML = "Zu erratender Code";
        for (let i = 0; i < 4; i++) {
            document.getElementById("infoID").innerHTML = "Bitte geben sie Zahl " + (i+1) + " ein";
            ergebnisBackup[i] = document.getElementById("selectID").value;
        }
        phase = "raten";
        console.log("ergebnis: "+ ergebnisBackup);
        return;
    }
});



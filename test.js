let ergebnis = []
let ergebnisBackup = []
let tip = []
let crit = 0
let hit = 0


while (!null){
let laenge = prompt("Geben Sie die ๐ฅ๐๐ป๐ฑ๐ฒ๐ป๐ฎ๐ป๐๐ฎ๐ต๐น an: ",0);  // Definieren der Rundenanzahl


    for (let z=0; z<4; z++) {               // Definieren der zu erratenden Zahlen
        ergebnisBackup[z] = prompt("Ergebnis ๐ฆ๐๐ฒ๐น๐น๐ฒ "+(z+1)+":",0)
    }

        for (let i=0; i<laenge; i++) {
            ergebnis.splice(0, ergebnis.length)   //Leeren des Arrays
            ergebnis = ergebnis.concat(ergebnisBackup) // Zusammenfรผgen der Arrays, !da einfรผgen des Backup-Arrays fรผr ein mehrdimensionales Array sorgt.
            crit = 0;        //Setzt crit jede Runde zurรผck
            hit = 0;         //Setzt hit jede Runde zurรผck
            for (let y=0; y<4; y++){  // fรผgt in 4 Zรผgen jeweils einen wert ins tip-Array
                tip[y] = prompt("๐ฅ๐๐ป๐ฑ๐ฒ "+(i+1)+":\n"+"Bitte geben sie die Zahl an ๐ฆ๐๐ฒ๐น๐น๐ฒ "+(y+1)+" ein: ",0)
                if (ergebnis[y] == tip[y]){     // Pro crit wird crit +1 hochgezรคhlt
                    crit = crit+1
                    ergebnis[y] = "gesperrt"    // ergebnis-Array wird an crit-Stelle gesperrt, damit es nicht bei normalen hits doppelt gezรคhlt wird
                }
                for (let n=0; n<4;n++){
                    if(ergebnis[n] == tip[y]){   //??? warum nicht tip[n] == ergebnis [y]?????
                        hit = hit+1
                    }
                }
            }
                if (crit<4 && i<laenge){
                    console.log("Runde "+(i+1)+" von "+laenge+": du hast "+crit+" ๐ธ๐ฟ๐ถ๐๐ถ๐๐ฐ๐ต๐ฒ ๐ง๐ฟ๐ฒ๐ณ๐ณ๐ฒ๐ฟ und "+hit+" ๐ถ๐ป๐ฑ๐ถ๐ฟ๐ฒ๐ธ๐๐ฒ ๐ง๐ฟ๐ฒ๐ณ๐ณ๐ฒ๐ฟ")
                }
                if (crit==4 && i<laenge){
                    console.log("Gratuliere du hast gewonnen!")
                    if ((i+1)<2 ){console.log("Du hast "+(i+1)+" ๐ญ๐๐ด gebraucht.")}
                    else{console.log("Du hast "+(i+1)+" ๐ญ๐ฬ๐ด๐ฒ gebraucht.")}
                    break
                }
                if (laenge == (i+1)) {                    
                    console.log("Verloren")
                }
        }
}  



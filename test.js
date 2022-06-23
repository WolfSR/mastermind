let ergebnis = []
let ergebnisBackup = []
let tip = []
let crit = 0
let hit = 0


while (!null){
let laenge = prompt("Geben Sie die 𝗥𝘂𝗻𝗱𝗲𝗻𝗮𝗻𝘇𝗮𝗵𝗹 an: ",0);  // Definieren der Rundenanzahl


    for (let z=0; z<4; z++) {               // Definieren der zu erratenden Zahlen
        ergebnisBackup[z] = prompt("Ergebnis 𝗦𝘁𝗲𝗹𝗹𝗲 "+(z+1)+":",0)
    }

        for (let i=0; i<laenge; i++) {
            ergebnis.splice(0, ergebnis.length)   //Leeren des Arrays
            ergebnis = ergebnis.concat(ergebnisBackup) // Zusammenfügen der Arrays, !da einfügen des Backup-Arrays für ein mehrdimensionales Array sorgt.
            crit = 0;        //Setzt crit jede Runde zurück
            hit = 0;         //Setzt hit jede Runde zurück
            for (let y=0; y<4; y++){  // fügt in 4 Zügen jeweils einen wert ins tip-Array
                tip[y] = prompt("𝗥𝘂𝗻𝗱𝗲 "+(i+1)+":\n"+"Bitte geben sie die Zahl an 𝗦𝘁𝗲𝗹𝗹𝗲 "+(y+1)+" ein: ",0)
                if (ergebnis[y] == tip[y]){     // Pro crit wird crit +1 hochgezählt
                    crit = crit+1
                    ergebnis[y] = "gesperrt"    // ergebnis-Array wird an crit-Stelle gesperrt, damit es nicht bei normalen hits doppelt gezählt wird
                }
                for (let n=0; n<4;n++){
                    if(ergebnis[n] == tip[y]){   //??? warum nicht tip[n] == ergebnis [y]?????
                        hit = hit+1
                    }
                }
            }
                if (crit<4 && i<laenge){
                    console.log("Runde "+(i+1)+" von "+laenge+": du hast "+crit+" 𝗸𝗿𝗶𝘁𝗶𝘀𝗰𝗵𝗲 𝗧𝗿𝗲𝗳𝗳𝗲𝗿 und "+hit+" 𝗶𝗻𝗱𝗶𝗿𝗲𝗸𝘁𝗲 𝗧𝗿𝗲𝗳𝗳𝗲𝗿")
                }
                if (crit==4 && i<laenge){
                    console.log("Gratuliere du hast gewonnen!")
                    if ((i+1)<2 ){console.log("Du hast "+(i+1)+" 𝗭𝘂𝗴 gebraucht.")}
                    else{console.log("Du hast "+(i+1)+" 𝗭𝘂̈𝗴𝗲 gebraucht.")}
                    break
                }
                if (laenge == (i+1)) {                    
                    console.log("Verloren")
                }
        }
}  



const domande = [
    {
        domanda: "A riunione e/o in uscita non porto mai",
        risposte: [{
            txt: "scarponi e fornellino",
            val: "A"
        },{
            txt: "bibbia e chitarra",
            val: "B"
        },{
            txt: "la carta di clan e una copia della costituzione",
            val: "C"
        },{
            txt: "buonumore e un bastone per camminare",
            val: "D"
        }]
    },{
        domanda: "La caratteristica che più mi si addice",
        risposte: [{
            txt: "l’indifferenza",
            val: "C"
        },{
            txt: "la superficialità",
            val: "B"
        },{
            txt: "l'egoismo",
            val: "D"
        },{
            txt: "la pigrizia",
            val: "A"
        }]
    },{
        domanda: "In quale di questi posti vorresti tanto andare, ma non ti senti a tuo agio?",
        risposte: [{
            txt: "in missione in America Latina",
            val: "D"
        },{
            txt: "in un rifugio di montagna a 2000mt",
            val: "A"
        },{
            txt: "ad un concerto",
            val: "B"
        },{
            txt: "in assemblea di istituto",
            val: "C"
        }]
    },{
        domanda: "Sento di aver fatto tutto nella vita, ma c’è qualcosa che ancora mi manca…",
        risposte: [{
            txt: "una ciaspolata in notturna",
            val: "A"
        },{
            txt: "un concerto di raccolta fondi per le ong del mediterraneo",
            val: "C"
        },{
            txt: "una serata tranquilla a leggere un libro e pensare",
            val: "B"
        },{
            txt: "andare con l’unità di strada a distribuire un pasto caldo e fare compagnia a chi vive in strada",
            val: "D"
        }]
    },{
        domanda: "Se dov’esse esserci un altro te a questo mondo, vorresti che fosse una persona",
        risposte: [{
            txt: "sensibile e sempre pronta a rendersi utile",
            val: "D"
        },{
            txt: "romantica ed entusiasta",
            val: "B"
        },{
            txt: "coraggiosa e impegnata",
            val: "C"
        },{
            txt: "atletica e avventurosa",
            val: "A"
        }]
    },{
        domanda: "In questo momento della mia vita vorrei…",
        risposte: [{
            txt: "conoscermi meglio e trovare un modo per esprimermi",
            val: "B"
        },{
            txt: "scappare dalla città e rifugiarmi nei boschi",
            val: "A"
        },{
            txt: "rendermi veramente utile al prossimo",
            val: "D"
        },{
            txt: "capire cosa posso fare per migliorare questo mondo",
            val: "C"
        }]
    },{
        domanda: "Quale di queste scuse i tuoi amici troverebbero meno credibile “scusa, non ci sono, devo …",
        risposte: [{
            txt: "andare a votare",
            val: "C"
        },{
            txt: "aiutare mia nonna che la badante è in ferie",
            val: "D"
        },{
            txt: "farmi lo zaino per la route",
            val: "A"
        },{
            txt: "andare a messa",
            val: "B"
        }]
    },{
        domanda: "Il gesto romantico per eccellenza è",
        risposte: [{
            txt: "scrivere e cantare una serenata sotto la finestra",
            val: "B"
        },{
            txt: "essere difesi con un discorso accorato da una folla inferocita e armata di forconi",
            val: "C"
        },{
            txt: "essere portati in spalla dopo essersi slogati una caviglia",
            val: "D"
        },{
            txt: "una passeggiata al chiaro di luna a guardare le stelle cadenti",
            val: "A"
        }]
    },{
        domanda: "Il mio motto è",
        risposte: [{
            txt: "sulle cime più alte ci si rende conto che la neve, il cielo e l’oro hanno lo stesso valore",
            val: "A"
        },{
            txt: "il modo vero di essere felici è rendere felici gli altri",
            val: "D"
        },{
            txt: "ci impegniamo perché non potremmo non impegnarci",
            val: "C"
        },{
            txt: "il cuore degli stolti sta sulla loro bocca, mentre bocca dei saggi è il loro cuore",
            val: "B"
        }]
    },{
        domanda: "Non so se prenderò mai la partenza, ma sicuramente per me un grande ostacolo sarà",
        risposte: [{
            txt: "la scelta politica",
            val: "C"
        },{
            txt: "farmi ancora un’altra route",
            val: "A"
        },{
            txt: "la scelta di fede",
            val: "B"
        },{
            txt: "quale servizio farò dopo",
            val: "D"
        }]
    },{
        domanda: "Sì, bello il clan, ma ci vorrebbe un po’ più di",
        risposte: [{
            txt: "tempo per dare una mano",
            val: "D"
        },{
            txt: "impegno politico e dibattito",
            val: "C"
        },{
            txt: "gioia e condivisione autentica",
            val: "B"
        },{
            txt: "spirito di avventura",
            val: "A"
        }]
    }
];

const risposte = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

function cleanQuestion() {
    document.getElementById('question').innerHTML = '';
}

function loadQuestion(n) {
    let qe = document.getElementById('question');
    let q = document.createElement('h2');
    q.textContent = domande[n].domanda;
    qe.appendChild(q);
    let table = document.createElement('table');
    table.setAttribute('class','question');
    let rr,rc,rb;
    for (let ans in domande[n].risposte) {
        if (ans%2 == 0) {
            rr = document.createElement('tr');
        }        
        rc = document.createElement('td');
        rb = document.createElement('div');
        rb.textContent = domande[n].risposte[ans].txt;
        rb.setAttribute('onclick',`getAnswer(${n},"${domande[n].risposte[ans].val}")`);
        rc.appendChild(rb);
        rr.append(rc);
        if (ans%2 == 1) {
            table.appendChild(rr);
        }
    }
    qe.appendChild(table);
}

function getAnswer(n,answer) {
    risposte[answer] += 1;
    if (domande.length > n+1) {
        cleanQuestion();
        loadQuestion(n+1);
    } else {
        console.table(risposte);
        showResults();
    }
}

function showResults() {
    cleanQuestion();
    let qe = document.getElementById('question');
    const best = Object.keys(risposte).reduce((a, b) => risposte[a] > risposte[b] ? a : b);
    let risposta = {};
    switch (best) {
        case 'A':
            risposta.title = "Ti consigliamo un EPPPI di strada / avventura";
            risposta.body = "Per te il vero scout è l'uomo dei boschi, \"passabile in un salotto ma indispensabile in un naufragio\", gli ingredienti di un'uscita vincente è azione, adrenalina e avventura. Se la tua comunità non cammina al tuo passo, se molte tue proposte sono giudicate troppo estreme, perché non osare di più con un EPPPI?";
            break;
        case 'B':
            risposta.title = "Ti consigliamo un EPPPI di spiritualità / animazione espressiva";
            risposta.body = "Il tuo mondo interiore è ricco di pensieri profondi, cercando saggezza e serenità attraverso il silenzio e connessione con il divino. Nelle route come nelle uscite e negli incontri di clan trovi sempre il tempo per esplorare la tua anima e di trovare equilibrio nella tua vita. Talvolta il tuo clan risulta indifferente a questo tuo desiderio di trascendenza, perché non provare a respirare un po' di puro Spirito con un EPPPI?";
            break;
        case 'C':
            risposta.title = "Ti consigliamo un EPPPI di scelta politica";
            risposta.body = "La tua sete di conoscenza è inarrestabile, e ti impegni a conoscere la realtà a fondo. Sei quel tipo di individuo che non si accontenta delle risposte superficiali, ma si dedica a scavare più a fondo per scoprire la verità nascosta. Vuoi essere un agente di cambiamento nella società, ma spesso la tua comunità di clan non ti segue e non condivide il tuo entusiasmo, allora perché non spendere la tua energia e il tuo impegno in un EPPPI di scelta politica? ";
            break;
        case 'D':
            risposta.title = "Ti consigliamo un EPPPI di servizio";
            risposta.body = "Sei un faro di positività nella vita di chi ti circonda. La tua dedizione nel rendere felici le persone intorno a te è davvero contagiosa. Ami donare gioia e sorrisi, e la tua presenza è come un raggio di sole che illumina il giorno di chiunque ti incontri. Cerchi sempre nuove occasioni per vivere al meglio la tua scelta di servizio e quindi non ti lascerai sfuggire l'opportunità di vivere un EPPPI di servizio!";
            break;
    }
    let img = document.createElement('img');
    img.setAttribute('src',`${best}.jpg`);
    img.setAttribute('height',300);
    let tit = document.createElement('h1');
    tit.textContent = risposta.title;
    let bod = document.createElement('p');
    bod.textContent = risposta.body;
    qe.appendChild(img);
    qe.appendChild(tit);
    qe.appendChild(bod);
    qe.innerHTML += `
    <table class="footer"><tr style="zoom: 1.5">
        <td>
            <a href="https://emiro.agesci.it/wp-content/uploads/2024/01/Volantino-EPPPI-2024-v1.pdf">
            <img src="logoeppiemiro.png" title="Guarda tutti gli EPPPI della regione" height="100">
            <br>Guarda tutti gli EPPPI della regione
            </a></td>
        <td>
            <a href="https://buonacaccia.net/Events.aspx?RID=F&CID=33">
            <img src="BCnavbar.png" title="Iscriviti ora!">
            <br>Iscriviti ora!
            </a></td>
        <td onclick="location.reload()"><span id="reload">↺</span><br>Ripeti il quiz</td>
    </tr></table>    
    `;
}
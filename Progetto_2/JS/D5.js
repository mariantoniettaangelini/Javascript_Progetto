/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets);

  <script>
    const pets = ['dog', 'cat', 'hamster', 'redfish']
    for(var i = 0; i < pets.length; i++){
    console.log(pets[i]);
    }
  </script>


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

  <script>
    var pets2 = pets.sort()
    console.log(pets2) 
  </script>

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

  <script>
    var pets3 = pets.reverse()
    console.log(pets3)
  </script>

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

  <script>
    function moveToLastElement(pets) {
      let firstElement = pets[0]
      pets.shift()
      pets.push(firstElement)
      return pets 
    }
    console.log(moveToLastElement(pets))
  </script>

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

  <script>
    for (let i = 0; i < cars.length; i++) {
            let car = cars[i];
            car.licensePlate = "NGL975"
            }

            console.log(cars);
  </script>

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

  <script>
    let newCar = {
    brand: 'Fiat',
    model: 'Panda',
    color: 'black',
    trims: ['non', 'so', 'cosa', 'significa', 'trims'],
    licensePlate: 'NGL975'
    }
    cars.push(newCar);
    console.log(cars);
  </script>
        
  <script>
    for (let i = 0; i < cars.length; i++) {
    let car2 = cars[i];
    car2.trims.pop();
    }

    console.log(cars);
  </script>

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

  <script>
    var charactersArray2 = []
            
            for(i=0; i<charactersArray.length; i++);{

            let number = charactersArray[i];
            switch(number) {
                case 'g': charactersArray2.push(7);
                break;

                case 'n': charactersArray2.push(21);;
                break;

                case 'u': charactersArray2.push(7);;
                break;

                case 'z': charactersArray2.push(26);;
                break;

                case 'n': charactersArray2.push(4);;
                break;
                default:
            }}
        console.log(number);   
  </script>

import React, {useState} from 'react'

function Books() {
    const [books, muudaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "The Magic Tree", "Wizards of Ice",]);

    const sorteeriAZ = () => {
        books.sort((a,b) => a.localeCompare(b))
        muudaBooks(books.slice());

    }
    const sorteeriZA =() => {
        books.sort((a,b) => b.localeCompare (a))
        muudaBooks(books.slice());
    }

    const sõnapikkus = () => {
        books.sort((a, b) => a.length - b.length);
        muudaBooks(books.slice());
      }

      const teiseTaheJargi = () => {
        books.sort((a, b) => a[1].localeCompare(b[1]));
        muudaBooks(books.slice());
      }

      const sonadeArvuJargi = () => {
        books.sort((a, b) => a.split(' ').length - b.split(' ').length);
        muudaBooks(books.slice());
      }

      
      
      
      

  return (
    <div>
        {books.map(Muutuja => <div>{Muutuja}</div> )}
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sõnapikkus}>Sõnapikkus</button>
        <button onClick={teiseTaheJargi}>Teise tähe järgi</button>
        <button onClick={sonadeArvuJargi}>Sõna arv</button>
      


      

    </div>
  )
}

export default Books
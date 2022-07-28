import booksByCategory from './db.json' assert {type: 'json'}

// botão
const elementBtn = document.querySelector('#btn');

// capturando o lick no botão
elementBtn.addEventListener('click', () => {

  // dados de entrada: Input
  const nameAuthors = document.querySelector('#inputName').value;
  // saida dos dados: Output
  const result = document.querySelector('#res');

  const booksAuthors = booksByCategory.map(category => category.books)
    .map(books => books.filter(book => book.author === nameAuthors))

  // Validação dos dados 
  if (nameAuthors == '') {
    alert('Não encontramos nenhum livro com esse autor');
  } else {
    result.innerHTML = `<h1>${nameAuthors}</h1>`;
    booksAuthors.forEach(books => {
      books.forEach(book => {
        result.innerHTML += `<p>${book.title}</p>`;
      });
    });
  }

});

// // Contar autores 
// function countAuthors() {
//   const authors = booksByCategory.map(category => category.books)
//     .map(books => [...new Set (books.map(book => book.author))])
//     .reduce((total, authors) => total + authors.length, 0);

//   console.log(`Total de autores ${authors}`);
// }

// function searchBooks(author) {
//   const booksAuthors = booksByCategory.map(category => category.books)
//     .map(books => books.filter(book => book.author === author))

//     console.log(booksAuthors[0][0].title)
// }

// function main() {
//   return {
//     countAuthors: countAuthors(),
//     searchBooks: searchBooks('T. Harv Eker')
//   }
// }

// main()
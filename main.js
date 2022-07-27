const booksByCategory = [{
    category: "Riqueza",
    books: [{
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [{
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

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
    result.innerHTML = `<p>Livros: ${booksAuthors.map(books => books.map(book => book.title))}</p>`
    console.log(booksAuthors);
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
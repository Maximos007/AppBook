import booksByCategory from '../../db.json' assert {type: 'json'}

const elementBtn = document.querySelector('#btn');

elementBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const nameAuthors = document.querySelector('#name').value;
  if (nameAuthors === '') {
    alert('Digite o nome do autor');
    return;
  }
  const result = document.querySelector('.list');
  const booksAuthors = booksByCategory
    .map(category => category.books)
    .map(books => books
      .filter(book => book.author
        .toLowerCase()
        .startsWith(nameAuthors.toLowerCase())))
      
  const consultBook = booksAuthors.filter(books => books.length > 0);

  if (consultBook.length > 0) {
    result.innerHTML = '';
    consultBook.forEach(books => {
      books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
        <img src="assets/img/book_black_24dp.svg" alt="">
        ${book.title} - ${book.author}
        `;
        result.appendChild(li);
      })
    })
  } else {
    result.innerHTML = 'Não há livros deste autor';
  }

})
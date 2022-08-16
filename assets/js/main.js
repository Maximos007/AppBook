import booksByCategory from '../../db.json' assert {type: 'json'}

const elementBtn = document.querySelector('#btn');

elementBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const nameAuthors = document.querySelector('#name').value;
  const result = document.querySelector('.list');

  if (nameAuthors === '') {
    alert('Digite o nome do autor');
    return;
  }
  
  function getBooksByAuthor() {
    const books = booksByCategory.reduce((acc, category) => {
      return [...acc, ...category.books];
    }, []);

    return books
  }

  function filterBooksByAuthor(getBooksByAuthor) {
    return getBooksByAuthor().filter((book) => book.author
    .toLowerCase().startsWith(nameAuthors.toLowerCase()));
  }
  
  const books = filterBooksByAuthor(getBooksByAuthor);

  if (books.length === 0) {
    result.innerHTML = 'Nenhum livro encontrado';
    return;
  }

  result.innerHTML = '';
  const ul = document.createElement('ul');
  result.appendChild(ul);

  books.forEach((book) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <img src="assets/img/book_black_24dp.svg" alt="">
    <p>${book.title}</p>
    `
    ul.appendChild(li);
  });
});